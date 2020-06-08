import React from 'react';
import { render } from '@testing-library/react';

import SharedUtilRouting from './shared-util-routing';

describe(' SharedUtilRouting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilRouting />);
    expect(baseElement).toBeTruthy();
  });
});
