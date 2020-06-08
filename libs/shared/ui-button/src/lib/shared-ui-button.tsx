import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiButtonProps {
  children: React.ReactNode
}

const Button = styled.button`
  color: red;
`;

export const SharedUiButton = ({ children }: SharedUiButtonProps) => {
  return (
    <Button>
      {children}
    </Button>
  );
};

export default SharedUiButton;
