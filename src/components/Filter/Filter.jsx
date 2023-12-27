const Filter = ({ title, value, onChange }) => {
  return (
    <div>
      Find contacts by name
      {<h4>{title}</h4>}
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
export default Filter;
