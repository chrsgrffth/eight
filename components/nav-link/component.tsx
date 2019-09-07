import React from "react";
import styled from "styled-components";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children?: React.ReactNode;
  href: string;
}

export const NavLink = (props: Props) => {
  return (
    <Link {...props}>
      <StyledLink href={props.href}>{props.children}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.5em;
`;
