import { useCallback, useEffect, useState } from "react";
import { fetchMessages } from "../../api/message-api";
import {
  Message,
  selectMessage,
  useMessageDispatch,
} from "../../message-state";
import MessageListItem from "./MessageListItem";

const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useMessageDispatch();
  const onSelect = useCallback(
    (messageId: string) => {
      dispatch(selectMessage(messageId));
    },
    [dispatch]
  );

  useEffect(() => {
    setLoading(true);
    fetchMessages().then((res) => {
      setMessages(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="messageList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        messages.map((message) => (
          <MessageListItem key={message.id} message={message} onSelect={onSelect} />
        ))
      )}
    </div>
  );
};

export default MessageList;
