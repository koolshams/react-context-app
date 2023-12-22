import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { initialState, MessageActionType, MessageState } from "./constants";
import { messageReducer } from "./reducer";

export type MessageContextType = {
  state: MessageState;
  dispatch: Dispatch<MessageActionType>;
};

export const MessageContext = createContext<MessageContextType>({} as any);

export const MessageProvider = ({ children }: { children?: ReactNode }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessageDispatch = () => {
  const { dispatch } = useContext(MessageContext);
  return dispatch;
};

export const useMessageState = <T,>(
  callback: (state: MessageState) => T
): T => {
  const { state } = useContext(MessageContext);
  return callback(state);
};
