import {useParams} from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './about.css';
import {Description, Spinner} from '../../components';
import {POKEMONURI} from '../../utils';

export default function About() {
  const params = useParams();
  const URI = POKEMONURI + params.id;
  const [data] = useFetchData(URI, []);

  return (
    <div className='about-center' data-testid='test-aboutpage'>
      {Object.keys(data).length ? (
        <Description data={data} key={data.id} />
      ) : (
        <Spinner />
      )}
    </div>
  );
}
