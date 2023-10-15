import projectFirestore from '../firebase/config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    projectFirestore
      .collection('movies')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No movies found');
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setData(result);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data.map((oneMovie) => {
        const { id, title } = oneMovie;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <Link to={`/one-movie/${id}`}>More info</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllMovies;
