import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import '../index.css';

const NewNameForm = ({ addVictim }) => {
  const [victim, setVictim] = useState('');
  const handleChange = event => setVictim(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    addVictim(victim);
    setVictim('');
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className='center'>
      <TextField id="standard-basic" label="Name" value={victim} onChange={handleChange} />
      <Button variant="contained" type="submit" disabled={victim === ''}>Add!</Button>
    </form>
  );
};

export default NewNameForm;
