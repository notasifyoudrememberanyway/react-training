export const Buttons = ({ organisations, handleClick }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly my-4">
      {organisations.map((organisation) => (
        <button
          className="btn btn-info m-2"
          type="button"
          onClick={handleClick}
          name={organisation}
          key={organisation}
        >
          {organisation}
        </button>
      ))}
    </div>
  );
};
