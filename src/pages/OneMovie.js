import { useParams } from 'react-router';

const OneMovie = () => {
  const { movieId } = useParams();

  return <div>{movieId}</div>;
};

export default OneMovie;
