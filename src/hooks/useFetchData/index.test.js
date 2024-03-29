import useFetchData from '.';
import { POKEMONURI } from '../../utils';
import { mount } from 'enzyme';
import { it, describe, expect } from '@jest/globals';

describe('testing custom hook useFetchData', () => {
  let results;
  it('should return if URI is given', () => {
    function HookWrapper() {
      results = useFetchData(POKEMONURI, []);
      return null;
    }
    mount(<HookWrapper />);
    expect(results).toBeDefined();
  });
});
