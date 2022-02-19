import { Cards } from '../../components';
import LoaderCards from '../../components/LoaderCards';
import { useFetchData } from '../../hooks';
import { POKEMONURI } from '../../utils';
import './app.css';

function App() {
  const [data, isLoading] = useFetchData(POKEMONURI, []);
  const cardsWithData = () => (
    <div className='App-body'>
      {data.results.map((pokemon: any, index: number) => (
        <Cards
          key={index}
          name={pokemon.name}
          url={pokemon.url}
          index={index + 1}
        />
      ))}
    </div>
  );

  const cardsWithoutData = () => (
    <div className='App-body'>
      {Array(10)
        .fill(1)
        .map((val, index) => (
          <LoaderCards key={index} />
        ))}
    </div>
  );
  return (
    <div className='App' data-testid='test-header'>
      {data.results && !isLoading ? cardsWithData() : cardsWithoutData()}
    </div>
  );
}

export default App;
