import React from "react";
import styled from "styled-components";

interface Props {
  alignItems?: AlignItems;
  children?: React.ReactNode;
  gutter?: boolean;
}

export enum AlignItems {
  Baseline = "baseline"
}

const StyledGrid = styled.div<Props>`
  display: flex;
  width: 100%;

  align-items: ${props => props.alignItems};
`;

export const Grid = (props: Props) => {
  // https://medium.com/better-programming/passing-data-to-props-children-in-react-5399baea0356
  const columns = React.Children.map(props.children, (child, i) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      gutter: i > 0 && props.gutter
    });
  });

  return <StyledGrid {...props}>{columns}</StyledGrid>;
};
