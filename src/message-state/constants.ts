export enum MessageActions {
  SHOW_FORM = "SHOW_FORM",
  SHOW_LIST = "SHOW_LIST",
  SELECT_MESSAGE = "SELECT_MESSAGE",
  DESELECT_MESSAGE = "DESELECT_MESSAGE",
  REQUEST_LIST_UPDATE = "REQUEST_LIST_UPDATE",
  SET_LIST_UPDATED = "SET_LIST_UPDATED",
}

export interface MessageState {
  ui: MessageUIState;
}

export interface MessageUIState {
  screen: "FORM" | "LIST";
  selectedMessageId?: string;
  listUpdatedNeeded: boolean;
}

export interface MessageInput {
  to: string;
  message: string;
}

export interface Message {
  id: string;
  content: string;
  createAt: string;
  to: string;
}

export interface MessageReply {
  id: string,
  messageId: string,
  content: string;
  createAt: string;
}

export interface MessageReplyInput {
  content: string;
}

export const initialState: MessageState = {
  ui: {
    screen: "LIST",
    selectedMessageId: undefined,
    listUpdatedNeeded: false,
  },
};

export type MessageActionType =
  | {
      type: MessageActions.SHOW_FORM;
    }
  | {
      type: MessageActions.SHOW_LIST;
    }
  | {
      type: MessageActions.DESELECT_MESSAGE;
    }
  | {
      type: MessageActions.SELECT_MESSAGE;
      messageId: string;
    }
  | {
      type: MessageActions.REQUEST_LIST_UPDATE;
    }
  | {
      type: MessageActions.SET_LIST_UPDATED;
    };
