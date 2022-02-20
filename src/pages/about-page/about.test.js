import { shallow } from 'enzyme';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import About from '.';

describe('App Component', () => {
  let wrapper;
  beforeAll(AddWatchMedia);
  beforeEach(() => (wrapper = shallow(<About />)));
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
