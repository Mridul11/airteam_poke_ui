import { render, screen } from '@testing-library/react';
import Spinner from '.';
import AddWatchMedia from '../../utils/test-utils/add-matchmedia';

describe('Spinner component', () => {
  beforeAll(AddWatchMedia);

  test('renders Spinner element', () => {
    render(<Spinner />);
    const loader = screen.getAllByTestId('test-spinner');
    expect(loader).toHaveLength(2);
  });
});
