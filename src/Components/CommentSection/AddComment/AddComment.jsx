const AddComment = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <div>
          <input
            type="text"
            // value={props.comment}
            placeholder="Comment"
            id='commentInputField'
            onChange={(e) => props.setNewComment(e.target.value)}
          />
        </div>
        <button type="submit" id='submitCommentButton'>Create</button>
      </form>
    </div>
  );
};

export default AddComment;
