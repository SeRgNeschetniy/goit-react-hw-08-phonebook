import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  const handelChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id={nameId}
          label="Name"
          value={name}
          autoComplete="name"
          autoFocus
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //helperText="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handelChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id={numberId}
          label="Number"
          value={number}
          onChange={handelChange}
          type="tel"
          name="number"
          autoComplete="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          //helperText="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Contacts
        </Button>
      </Box>
    </Box>

    // <ContactsWrapp>
    //   <form onSubmit={handleSubmit}>
    //     <div className="contacts__name">
    //       <label htmlFor={nameId}>Name</label>
    //       <input
    //         id={nameId}
    //         value={name}
    //         onChange={handelChange}
    //         type="text"
    //         name="name"
    //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         required
    //       />
    //     </div>

    //     <div className="contacts__phone">
    //       <label htmlFor={numberId}>Number</label>
    //       <input
    //         id={numberId}
    //         value={number}
    //         onChange={handelChange}
    //         type="tel"
    //         name="number"
    //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //         required
    //       />
    //     </div>
    //     <button className="contacts__button">Add contact</button>
    //   </form>
    // </ContactsWrapp>
  );
}
