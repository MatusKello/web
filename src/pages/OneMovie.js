import './OneMovie.css';
import { useParams } from 'react-router';
import projectFirestore from '../firebase/config';
import { useState, useEffect } from 'react';

const OneMovie = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    projectFirestore
      .collection('movies')
      .doc(movieId)
      .get()
      .then((document) => {
        if (document.exists) {
          setData(document.data());
        } else {
          setError('No movie found');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [movieId]);

  return (
    <section className='one-movie-info'>
      {error && <p>{error}</p>}
      <h1>{data.title}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
        molestias exercitationem doloribus ex saepe. Quia ratione ad animi iure
        vitae, inventore, architecto provident nulla facilis sint magnam ducimus
        id repellat?
      </p>
      <p>{data.minage}+</p>
      <p>{data.time} minutes</p>
    </section>
  );
};

export default OneMovie;
