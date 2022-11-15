//import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';

export default function PhoneBookList({ items }) {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const elements = items?.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button type="submit" onClick={() => onRemoveContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

// PhoneBookList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   removeContact: PropTypes.func.isRequired,
// };
