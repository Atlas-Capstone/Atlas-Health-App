import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('should render the Home page', () => {
    const { getByText } = render(<Home />);
    const homePage = getByText('Home');
    expect(homePage).toBeInTheDocument();
  });
});
