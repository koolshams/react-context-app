import { useFormik } from "formik";
import { useState } from "react";
import { addMessage } from "../../api/message-api";
import {
  MessageInput,
  requestListUpdate,
  showMessageList,
  useMessageDispatch,
} from "../../message-state";

const MessageForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useMessageDispatch();
  const formik = useFormik<MessageInput>({
    initialValues: {
      to: "",
      message: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      addMessage(values).then(() => {
        setLoading(false);
        dispatch(requestListUpdate());
        dispatch(showMessageList());
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label className="form-label">To</label>
        <input
          type="text"
          name="to"
          value={formik.values.to}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <input
          type="text"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Message
      </button>
      {loading && <p>Saving....</p>}
    </form>
  );
};

export default MessageForm;
