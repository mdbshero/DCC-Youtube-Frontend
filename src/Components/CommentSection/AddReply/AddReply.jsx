const AddReply = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.handleSubmitReply(e, props.index)}>
        <div>
          <input
            type="text"
            placeholder="Reply"
            id="replyInputField"
            onChange={(e) => props.setReply(e.target.value)}
          />
        </div>
        <button type="submit" id="submitReplyButton">
          Reply
        </button>
      </form>
    </div>
  );
};

export default AddReply;
