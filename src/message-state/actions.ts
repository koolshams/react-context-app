import {
  MessageActions,
  MessageActionType,
} from "./constants";

export const showMessageForm = (): MessageActionType => ({
  type: MessageActions.SHOW_FORM,
});

export const showMessageList = (): MessageActionType => ({
  type: MessageActions.SHOW_LIST,
});

export const selectMessage = (messageId: string): MessageActionType => ({
  type: MessageActions.SELECT_MESSAGE,
  messageId,
});

export const deselectMessage = (): MessageActionType => ({
  type: MessageActions.DESELECT_MESSAGE,
});

export const requestListUpdate = (): MessageActionType => ({
  type: MessageActions.REQUEST_LIST_UPDATE,
});

export const setListUpdated = (): MessageActionType => ({
  type: MessageActions.SET_LIST_UPDATED,
});
