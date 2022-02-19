import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './about.css';
import { Description, Spinner } from '../../components';

export default function About() {
  const params = useParams();
  const URI = 'https://pokeapi.co/api/v2/pokemon/' + params.id;
  const [data] = useFetchData(URI, []);

  return (
    <div className='about-center'>
      {Object.keys(data).length ? <Description data={data} /> : <Spinner />}
    </div>
  );
}
