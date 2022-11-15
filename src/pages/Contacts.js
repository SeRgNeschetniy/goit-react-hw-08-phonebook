import Container from '@mui/material/Container';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import FormAddContacts from 'components/ContactForm/ContactForm';
import PhoneBookList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { getState } from 'redux/contacts/selectors';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className="block">
        <FormAddContacts />
      </div>
      <div className="block">
        <h2>Contacts</h2>
        <Filter filter={filter} />
        {!isLoading && contacts.length > 0 && (
          <PhoneBookList items={contacts} />
        )}
        {isLoading && <p>...loading</p>}
        {error && <p>oops, something went wrong</p>}
      </div>
    </Container>
  );
}
