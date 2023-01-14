export const Select = ({ organisations, handleChange }) => {
  return (
    <select
      className="form-select my-4"
      onChange={handleChange}
      defaultValue=""
    >
      <option value="" disabled>
        Select an organisation
      </option>
      {organisations.map((organisation) => (
        <option value={organisation} key={organisation}>
          {organisation}
        </option>
      ))}
    </select>
  );
};
