import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './about.css';
import { Description, Spinner } from '../../components';

export default function About() {
  const params = useParams();
  console.log('parsm', params);
  const URI = 'https://pokeapi.co/api/v2/pokemon/' + params.id;
  const [data] = useFetchData(URI, []);
  console.log(data);

  return (
    <div className='about-center'>
      {Object.keys(data).length ? <Description data={data} /> : <Spinner />}
    </div>
  );
}
