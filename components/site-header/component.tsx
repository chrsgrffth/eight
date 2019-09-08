import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Wrapper } from "../wrapper";
import { NavLink } from "../nav-link";
import { TweenLite } from "gsap";

interface Props {}

interface State {
  isMounted: boolean;
}

export class SiteHeader extends React.Component<Props, State> {
  public linkElement: HTMLDivElement;
  public linkElement2: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMounted: false
    };
  }

  public componentDidMount() {
    this.setState({ isMounted: true });

    if (this.linkElement) {
      TweenLite.set([this.linkElement, this.linkElement2], {
        opacity: 0,
        y: 10
      });
      TweenLite.to([this.linkElement, this.linkElement2], 0.2, {
        opacity: 1,
        y: 0
      }).delay(2);
    }
  }

  public render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Wrapper>
          <StyledHeader>
            <NavLink href="/" animationDelay={2}>
              Home
            </NavLink>
            <NavLink href="/about" animationDelay={2}>
              Info/CV
            </NavLink>
          </StyledHeader>
        </Wrapper>
      </div>
    );
  }
}

const StyledHeader = styled.div`
  width: 100%;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
`;
