import { render, screen } from '@testing-library/react';
import Spinner from '.';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';
import { describe, beforeAll, test, expect } from '@jest/globals';

describe('Spinner component', () => {
  beforeAll(AddWatchMedia);

  test('renders Spinner element', () => {
    render(<Spinner />);
    const loader = screen.getAllByTestId('test-spinner');
    expect(loader).toHaveLength(2);
  });
});
