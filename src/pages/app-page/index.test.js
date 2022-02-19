import { mount, shallow, render } from 'enzyme';
import axios from 'axios';

import App from '.';
import { fetchDataService } from '../../helpers/api';
import { POKEMONURI } from '../../utils';

describe('App Component', () => {
  let wrapper;
  beforeAll(() => {
    delete window.matchMedia;
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });
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
});
