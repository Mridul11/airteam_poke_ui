import './app.css';
import { Cards, LoaderCards } from '../../components';
import { useFetchData } from '../../hooks';
import { POKEMONURI } from '../../utils';
import MAINIMAGE from '../../assets/images/main.jpeg';
import AVATARIMAGE from '../../assets/images/avatar.jpeg';
import { useEffect, useState } from 'react';
import getBase64FromUrl from '../../helpers/blob-store';

const App = () => {
  const [data, isLoading] = useFetchData(POKEMONURI, []);
  const [mainImage, mainImageSet] = useState('');
  const [avatarImage, avatarImageSet] = useState('');

  useEffect(() => {
    function loadImage() {
      if (!localStorage.getItem(`avatar-img-${AVATARIMAGE}`)) {
        getBase64FromUrl(AVATARIMAGE).then((val) => {
          avatarImageSet(val + '');
          localStorage.setItem(`avatar-img-${AVATARIMAGE}`, val + '');
        });
      } else {
        avatarImageSet(localStorage.getItem(`avatar-img-${AVATARIMAGE}`) + '');
      }
      if (!localStorage.getItem(`main-img-${MAINIMAGE}`)) {
        getBase64FromUrl(MAINIMAGE).then((val) => {
          mainImageSet(val + '');
          localStorage.setItem(`main-img-${MAINIMAGE}`, val + '');
        });
      } else {
        mainImageSet(localStorage.getItem(`main-img-${MAINIMAGE}`) + '');
      }
    }
    loadImage();
  }, [MAINIMAGE, AVATARIMAGE]);

  const cardsWithData = () => (
    <div className='App-body'>
      {data.results.map((pokemon: any, index: number) => (
        <Cards
          key={index}
          name={pokemon.name}
          url={pokemon.url}
          index={index + 1}
          mainImage={mainImage}
          avatarImage={avatarImage}
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
};

export default App;
