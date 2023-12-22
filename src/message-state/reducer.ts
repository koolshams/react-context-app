import { produce } from "immer";
import { MessageActions, MessageActionType, MessageState } from "./constants";

export function messageReducer(
  state: MessageState,
  action: MessageActionType
): MessageState {
  return produce(state, (newState) => {
    switch (action.type) {
      case MessageActions.SHOW_FORM:
        newState.ui.screen = "FORM";
        break;

      case MessageActions.SHOW_LIST:
        newState.ui.screen = "LIST";
        break;

      case MessageActions.SELECT_MESSAGE:
        newState.ui.selectedMessageId = action.messageId;
        break;

      case MessageActions.DESELECT_MESSAGE:
        newState.ui.selectedMessageId = undefined;
        break;

      case MessageActions.REQUEST_LIST_UPDATE:
        newState.ui.listUpdatedNeeded = true;
        break;

      case MessageActions.SET_LIST_UPDATED:
        newState.ui.listUpdatedNeeded = false;
        break;

      default:
        throw new Error("Unknown Action");
    }
  });
}
