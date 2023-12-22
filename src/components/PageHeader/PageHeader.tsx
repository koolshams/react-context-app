import { useCallback } from "react";
import { showMessageForm, showMessageList, useMessageDispatch, useMessageState } from "../../message-state";

const PageHeader = () => {
  const screen = useMessageState(state => state.ui.screen);
  const dispatch = useMessageDispatch();

  const onAddButtonClick = useCallback(
    () =>
      dispatch(showMessageForm()),
    [dispatch]
  );

  const onBackButtonClick = useCallback(
    () =>
      dispatch(showMessageList()),
    [dispatch]
  );
  
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Messages
        </a>
        <form className="d-flex">
          {screen === "LIST" && (
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={onAddButtonClick}
            >
              Add
            </button>
          )}
          {screen === "FORM" && (
            <button
              className="btn btn-outline-default"
              type="button"
              onClick={onBackButtonClick}
            >
              Back
            </button>
          )}
        </form>
      </div>
    </nav>
  );
};

export default PageHeader;
