import React from 'react';
import { render } from '@testing-library/react';

import BfoetFeatureHome from './bfoet-feature-home';

describe(' BfoetFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BfoetFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
