import './app.css';
import {Cards, LoaderCards} from '../../components';
import {useFetchData} from '../../hooks';
import {POKEMONURI} from '../../utils';
const MAINIMAGE = require('../../assets/images/main.jpeg');
const AVATARIMAGE = require('../../assets/images/avatar.jpeg');
import {useEffect, useState} from 'react';

const App = () => {
  const [data, isLoading] = useFetchData(POKEMONURI, []);
  const [mainImage, mainImageSet] = useState('');
  const [avatarImage, avatarImageSet] = useState('');

  useEffect(() => {
    function loadImage() {
      if (!localStorage.getItem(`avatar-img-${AVATARIMAGE}`)) {
        avatarImageSet(AVATARIMAGE);
        localStorage.setItem(`avatar-img-${AVATARIMAGE}`, AVATARIMAGE);
      } else {
        avatarImageSet(
            String(localStorage.getItem(`avatar-img-${AVATARIMAGE}`)),
        );
      }
      if (!localStorage.getItem(`main-img-${MAINIMAGE}`)) {
        mainImageSet(MAINIMAGE);
        localStorage.setItem(`main-img-${MAINIMAGE}`, MAINIMAGE);
      } else {
        mainImageSet(String(localStorage.getItem(`main-img-${MAINIMAGE}`)));
      }
    }
    loadImage();
  }, []);

  const cardsWithData = () => (
    <div className='App-body' data-testid='test-datacards'>
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
    <div className='App-body' data-testid='test-cardswithoutdata'>
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
