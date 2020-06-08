import React from 'react';
import { render } from '@testing-library/react';

import SalesGrid from './sales-grid';

describe(' SalesGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SalesGrid />);
    expect(baseElement).toBeTruthy();
  });
});
