import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PagesHeader from '.';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';

describe('PagesHeader component', () => {
  beforeAll(AddWatchMedia);

  test('renders PagesHeader element', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <PagesHeader />
        </MemoryRouter>
      )
    );
    const PagesHeaderElement = screen.getByText('POKEDEK');
    expect(PagesHeaderElement).toMatchSnapshot();
  });
});
