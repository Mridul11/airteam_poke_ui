import { shallow } from 'enzyme';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import About from '.';
import { it, describe, beforeEach, beforeAll, expect } from '@jest/globals';

describe('About Component', () => {
  let wrapper;
  beforeAll(AddWatchMedia);
  beforeEach(() => (wrapper = shallow(<About />)));
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
