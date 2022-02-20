import { render, screen } from '@testing-library/react';
import LoaderCards from '.';
import { MemoryRouter } from 'react-router-dom';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';

describe('Loadercards component', () => {
  beforeAll(AddWatchMedia);
  test('renders loader-cards element', () => {
    render(
      <MemoryRouter>
        <LoaderCards />
      </MemoryRouter>
    );
    const loaderCardElement = screen.getByTestId('test-loadercard');
    expect(loaderCardElement).toMatchSnapshot();
  });
});
