import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system';
import '@testing-library/jest-dom/extend-expect';
import Users from './Users';

describe('when users page is rendered', () => {
  it('should show Search Users by Id text', () => {
    const { getByText } = render(
      <BraidTestProvider themeName="wireframe">
        <Users></Users>,
      </BraidTestProvider>,
    );

    expect(getByText('Search Users by Id')).toBeInTheDocument();
  });
});
