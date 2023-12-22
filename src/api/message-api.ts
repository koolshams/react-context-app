import {
  Message,
  MessageInput,
  MessageReply,
  MessageReplyInput,
} from "../message-state";

export const fetchMessages = async () => {
  const response = await fetch("/messages");
  if (response.status >= 300) {
    throw new Error(`Api responed with status: ${response.status}`);
  }
  return (await response.json()) as Message[];
};

export const addMessage = async (message: MessageInput) => {
  const response = await fetch("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: `msg-${Date.now()}`,
      to: message.to,
      createAt: new Date().toISOString(),
      content: message.message,
      replies: [],
    }),
  });

  return (await response.json()) as Message;
};

export const addMessageReply = async (
  messageId: string,
  reply: MessageReplyInput
) => {
  const response = await fetch(`/replies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: `rep-${Date.now()}`,
      messageId: messageId,
      createAt: new Date().toISOString(),
      content: reply.content,
    }),
  });

  return (await response.json()) as MessageReply;
};

export const fetchMessage = async (id: string) => {
  const response = await fetch(`/messages/${id}`);
  if (response.status >= 300) {
    throw new Error(`Api responed with status: ${response.status}`);
  }
  return (await response.json()) as Message;
};

export const fetchMessageReplies = async (id: string) => {
  const response = await fetch(`/replies?messageId=${id}`);
  if (response.status >= 300) {
    throw new Error(`Api responed with status: ${response.status}`);
  }
  return (await response.json()) as MessageReply[];
};
