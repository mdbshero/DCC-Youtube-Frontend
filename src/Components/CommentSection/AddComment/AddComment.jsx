const AddComment = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <div>
          <input
            type="text"
            value={props.comment}
            placeholder="Comment"
            onChange={(e) => props.handleChange(e)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddComment;
