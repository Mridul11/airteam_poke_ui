import {shallow} from 'enzyme';
import axios from 'axios';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import App from '.';
import {POKEMONURI} from '../../utils';
import {act, render, waitFor, screen, cleanup} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {describe, beforeEach, it, afterAll, beforeAll, test, expect} from '@jest/globals';

describe('App Component', () => {
  let wrapper;
  beforeAll(AddWatchMedia);
  beforeEach(() => (wrapper = shallow(<App />)));
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  afterAll(cleanup);

  it('should render with loaderCards component', () => {
    expect(wrapper.find('LoaderCards').length).toEqual(10);
  });

  it('should return the data once api is called!', async () => {
    const res = await axios.get(POKEMONURI);
    expect(res.data.results.length).toEqual(20);
  });

  test('test cardsWithData is defined', () => {
    const cardsWithData = render(<App />);
    expect(cardsWithData).toBeDefined();
  });

  test('test cardsWithoutData is defined', () => {
    const cardsWithoutData = render(<App />);
    expect(cardsWithoutData).toBeDefined();
  });

  test('cards with data', async () => {
    await act(async () =>
      render(
          <MemoryRouter>
            <App />
          </MemoryRouter>,
      ),
    );

    await waitFor(() => {
      expect(screen.getByTestId('test-datacards')).toBeDefined();
    });
  });
});
