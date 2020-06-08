import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiButtonProps {
  children: React.ReactNode,
  onClick?: () => void
}

const Button = styled.button`
  color: red;
`;

export const SharedUiButton = ({ children, onClick }: SharedUiButtonProps) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default SharedUiButton;
