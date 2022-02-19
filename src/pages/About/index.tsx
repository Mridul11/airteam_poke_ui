import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './about.css';

export default function About() {
  const params = useParams();
  console.log(params);
  const URI = 'https://pokeapi.co/api/v2/pokemon/' + params.id;
  const [data, isLoading] = useFetchData(URI, []);
  console.log(data);
  return (
    <div className="about-center">About</div>
  )
}
