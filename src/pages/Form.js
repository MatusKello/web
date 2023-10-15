import { useState } from 'react';
import projectFirestore from '../firebase/config';

const Form = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieAge, setMovieAge] = useState(null);
  const [movieTime, setMovieTime] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type='text '
          placeholder='Title'
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <input
          type='number'
          placeholder='Minimum age'
          min='1'
          onChange={(e) => setMovieAge(e.target.value)}
        />
        <input
          type='number'
          placeholder='Length of movie'
          min={1}
          onChange={(e) => setMovieTime(e.target.value)}
        />
        <input type='submit' value='Add movie' />
      </form>
    </div>
  );
};

export default Form;
