import PropTypes from 'prop-types';
export default function FilterName({ handlerChangeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>

      <input onChange={handlerChangeFilter} type="text" name="filter" />
    </div>
  );
}
FilterName.propTypes = {
  handlerChangeFilter: PropTypes.func.isRequired,
};
