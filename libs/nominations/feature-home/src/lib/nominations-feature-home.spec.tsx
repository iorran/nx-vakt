import React from 'react';
import { render } from '@testing-library/react';

import NominationsFeatureHome from './nominations-feature-home';

describe(' NominationsFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NominationsFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
