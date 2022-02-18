import { Cards } from '../../components';
import LoaderCards from '../../components/LoaderCards';
import { useFetchData } from '../../hooks';
import './App.css';

function App() {
  const [data, isLoading] = useFetchData(
    'https://pokeapi.co/api/v2/pokemon',
    []
  );
  if (data.results && !isLoading) {
    return (
      <div className='App-body'>
        {data.results.map((pokemon: any, index: number) => (
          <Cards key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='App'>
        <div className='App-body'>
          {Array(10)
            .fill(1)
            .map((val, index) => (
              <LoaderCards key={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
