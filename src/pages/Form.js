import { useState } from 'react';
import projectFirestore from '../firebase/config';

const Form = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieAge, setMovieAge] = useState(null);
  const [movieTime, setMovieTime] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    const newMovie = {
      title: movieTitle,
      minage: parseInt(movieAge),
      time: parseInt(movieTime),
    };

    try {
      await projectFirestore.collection('movies').add(newMovie);
      setMovieTitle('');
      setMovieAge('');
      setMovieTime('');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          value={movieTitle}
          type='text '
          placeholder='Title'
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <input
          value={movieAge}
          type='number'
          placeholder='Minimum age'
          min='1'
          onChange={(e) => setMovieAge(e.target.value)}
        />
        <input
          value={movieTime}
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
