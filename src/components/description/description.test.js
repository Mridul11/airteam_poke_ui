import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Description from '.';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import { describe, beforeAll, test, expect } from '@jest/globals';

describe('description component', () => {
  beforeAll(AddWatchMedia);

  const DATA = {
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        },
      },
    },
    stats: [],
  };

  test('renders description element', () => {
    render(
      <MemoryRouter>
        <Description data={DATA} />
      </MemoryRouter>
    );
    const description = screen.getByText('Pokemon Info');
    expect(description).toMatchSnapshot();
  });
});
