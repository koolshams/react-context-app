import { useCallback, useEffect, useState } from "react";
import { fetchMessage, fetchMessageReplies } from "../../api/message-api";
import { Message, MessageReply, useMessageState } from "../../message-state";
import MessageReplyForm from "./MessageReplyForm";

const MessageView = () => {
  const selectedId = useMessageState((state) => state.ui.selectedMessageId);
  const [message, setMessage] = useState<Message | undefined>();
  const [messageLoading, setMessageLoading] = useState(false);

  const [replies, setReplies] = useState<MessageReply[] | undefined>();
  const [repliesLoading, setRepliesLoading] = useState(false);

  const [repliesUpdating, setRepliesUpdating] = useState(false);

  const onSave = useCallback(() => {
    setRepliesUpdating(true);
    fetchMessageReplies(selectedId!).then((replies) => {
      setReplies(replies);
      setRepliesUpdating(false);
    });
  }, [selectedId]);

  useEffect(() => {
    if (selectedId) {
      setMessageLoading(true);
      setRepliesLoading(true);
      fetchMessage(selectedId).then((msg) => {
        setMessage(msg);
        setMessageLoading(false);
      });

      fetchMessageReplies(selectedId).then((replies) => {
        setReplies(replies);
        setRepliesLoading(false);
      });
    } else {
      setMessage(undefined);
    }
  }, [selectedId]);

  return (
    <div className="messageView">
      {messageLoading ? (
        <p>Loading</p>
      ) : (
        selectedId && (
          <>
            <div>To: {message?.to}</div>
            <div>Contents: {message?.content}</div>
            <div className="message-replies">
              <MessageReplyForm messageId={selectedId} onSave={onSave} />
              {repliesUpdating && <p>Comment is updated...</p>}
              {repliesLoading && <p>Comment is loading...</p>}
              {replies &&
                replies.map((reply) => (
                  <div className="border p-1 mt-1" key={reply.id}>
                    Date: {reply.createAt}
                    Content: {reply.content}
                  </div>
                ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default MessageView;
