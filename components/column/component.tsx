import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  columns: number;
  offset?: number;
  gutter?: boolean;
}

export const Column = styled.div<Props>`
  width: ${props => (props.columns / 12) * 100}%;
  margin-left: ${props => (props.offset / 12) * 100}%;
  padding-left: ${props => props.gutter && "0.5rem"};
`;

Column.defaultProps = {
  columns: 12,
  offset: 0
};
