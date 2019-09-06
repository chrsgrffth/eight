import React from "react";
import styled from "styled-components";

interface Props {
  children?: string;
  href?: string;
}

export const ButtonComponent = (props: Props) => {
  return props.href ? (
    <a {...props}>{props.children}</a>
  ) : (
    <button {...props}>{props.children}</button>
  );
};

export const Button = styled(ButtonComponent)`
  display: flex;
  font-size: 0.75rem;
  padding: 0.5em;
  cursor: pointer;
  color: #1a82fb;
  background: transparent;
  appearance: none;
  border: none;

  &:after {
    content: " ⃗";
    display: block;
    margin-left: 0.5em;
    transition: transform 0.1s ease-in;
    transform: translate3d(0, 0, 0);
  }

  &:focus,
  &:hover {
    &:after {
      transform: translate3d(10px, 0, 0);
    }
  }
`;
