const AddComment = (props) => {
  return (
    <div>
      <form className="form-inline" onSubmit={(e) => props.handleSubmit(e)}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            className="form-control"
            type="text"
            // value={props.comment}
            placeholder="Comment"
            id="commentInputField"
            onChange={(e) => props.setNewComment(e.target.value)}
          />
        </div>
        <button className="btn btn-dark mx-sm-3 mb-2" type="submit" id="submitCommentButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddComment;
