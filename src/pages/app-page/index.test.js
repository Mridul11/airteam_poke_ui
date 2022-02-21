import { shallow } from 'enzyme';
import axios from 'axios';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import App from '.';
import { POKEMONURI } from '../../utils';
import { render } from '@testing-library/react';

describe('App Component', () => {
  let wrapper;
  beforeAll(AddWatchMedia);
  beforeEach(() => (wrapper = shallow(<App />)));
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

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
});
