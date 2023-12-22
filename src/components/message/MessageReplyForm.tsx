import { useFormik } from "formik";
import { addMessageReply } from "../../api/message-api";

type MessageReplyFormProps = {
  messageId: string;
  onSave: () => void
};

const MessageReplyForm = ({ messageId, onSave }: MessageReplyFormProps) => {
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      addMessageReply(messageId, values).then(() => {
        formik.resetForm();
        onSave();
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Reply</label>
        <input
          type="text"
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Reply
      </button>
    </form>
  );
};

export default MessageReplyForm;
