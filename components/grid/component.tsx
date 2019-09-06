import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  gutter?: boolean;
}

const StyledGrid = styled.div<Props>`
  display: flex;
  width: 100%;
  margin: ${props => props.gutter && "0 -0.25rem"};
`;

export const Grid = (props: Props) => {
  // https://medium.com/better-programming/passing-data-to-props-children-in-react-5399baea0356
  const columns = React.Children.map(props.children, child => {
    return React.cloneElement(child as React.ReactElement<any>, {
      gutter: props.gutter
    });
  });

  return <StyledGrid {...props}>{columns}</StyledGrid>;
};
