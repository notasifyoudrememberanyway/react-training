export const Control = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-light"
          name="button"
          onClick={handleClick}
        >
          Use Buttons
        </button>
        <button
          type="button"
          className="btn btn-light"
          name="select"
          onClick={handleClick}
        >
          Use Select
        </button>
      </div>
    </div>
  );
};
