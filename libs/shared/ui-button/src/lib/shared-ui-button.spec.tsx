import React from 'react';
import { render } from '@testing-library/react';

import SharedUiButton from './shared-ui-button';

describe(' SharedUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiButton>Test</SharedUiButton>);
    expect(baseElement).toBeTruthy();
  });
});
