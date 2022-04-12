const AddReply = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.handleSubmitReply(e)}>
        <div>
          <input
            type="text"
            placeholder="Reply"
            id="replyInputField"
            onChange={(e) => props.setNewReply(e.target.value)}
          />
        </div>
        <button type="submit" id="submitReplyButton" onClick={(e) => console.log(props.index)}>
          Reply
        </button>
      </form>
    </div>
  );
};

export default AddReply;
