import './AllMovies.css';
import projectFirestore from '../firebase/config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = projectFirestore.collection('movies').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No movies found');
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setData(result);
        }
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => unsubscribe();
  }, []);

  const deleteMovie = (id) => {
    projectFirestore.collection('movies').doc(id).delete();
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {data.map((oneMovie) => {
        const { id, title } = oneMovie;
        return (
          <div key={id} className='one-movie'>
            <h2>{title}</h2>
            <Link to={`/one-movie/${id}`}>More info</Link>
            <button type='button' onClick={() => deleteMovie(id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllMovies;
