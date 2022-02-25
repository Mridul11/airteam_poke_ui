import { render, screen } from '@testing-library/react';
import { Cards } from '..';
import MAINIMAGE from '../../assets/images/main.jpeg';
import AVATARIMAGE from '../../assets/images/avatar.jpeg';
import { MemoryRouter } from 'react-router-dom';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import { describe, beforeAll, beforeEach, test, expect } from '@jest/globals';

describe('cards component', () => {
  let cardElement;
  beforeAll(AddWatchMedia);
  beforeEach(
    () =>
      (cardElement = render(
        <MemoryRouter>
          <Cards
            name={'Name'}
            url={'https://pokeapi.co/api/v2/pokemon'}
            index={0}
            mainImage={MAINIMAGE}
            avatarImage={AVATARIMAGE}
          />
        </MemoryRouter>
      ))
  );

  test('renders cards element', () => {
    const cardElement = screen.getByTestId('test-cards');
    expect(cardElement).toMatchSnapshot();
  });

  test('render the element value correctly', () => {
    const btnElement = cardElement.getByTestId('test-knowmorebtn');
    expect(btnElement).toBeInTheDocument();
  });

  test('render the element value correctly', () => {
    const ttElement = cardElement.getByTestId('test-card');
    expect(ttElement).toHaveTextContent('NAME');
  });
});
