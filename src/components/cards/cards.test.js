import { render, screen } from '@testing-library/react';
import Cards from '.';
import MAINIMAGE from '../../assets/images/main.jpeg';
import AVATARIMAGE from '../../assets/images/avatar.jpeg';
import { MemoryRouter } from 'react-router-dom';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';

describe('cards component', () => {
  beforeAll(AddWatchMedia);
  test('renders cards element', () => {
    render(
      <MemoryRouter>
        <Cards
          name={'Name'}
          url={'https://pokeapi.co/api/v2/pokemon'}
          index={0}
          mainImage={MAINIMAGE}
          avatarImage={AVATARIMAGE}
        />
      </MemoryRouter>
    );
    const cardElement = screen.getByTestId('test-cards');
    expect(cardElement).toMatchSnapshot();
  });
});
