import { useCallback } from "react";
import { Message } from "../../message-state";

const MessageListItem = ({
  message,
  onSelect,
}: {
  message: Message;
  onSelect: (messageId: string) => void;
}) => {
  const onClick = useCallback(() => {
    onSelect(message.id);
  }, [message, onSelect]);
  return (
    <div role="button" className="messageItem border mt-1 p-1" onClick={onClick}>
      <div>{message.to}</div>
      <div>{message.createAt}</div>
      <div>{message.content.slice(0, 100)}</div>
    </div>
  );
};

export default MessageListItem;