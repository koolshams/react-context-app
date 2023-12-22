import {
  useMessageState,
} from "../../message-state";
import MessageForm from "./MessageForm";
import PageHeader from "../PageHeader/PageHeader";
import MessageList from "./MessageList";
import MessageView from "./MessageView";

const Messages = () => {
  const { screen, selectedMessageId } = useMessageState((state) => state.ui);

  return (
    <>
      <PageHeader />
      <div className="container-fluid">
        {screen === "FORM" && <MessageForm />}
        {screen === "LIST" && (
          <div className="row">
            <div className="col-sm-4">
              <MessageList />
            </div>
            <div className="col-sm-8">
              {selectedMessageId && <MessageView />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
