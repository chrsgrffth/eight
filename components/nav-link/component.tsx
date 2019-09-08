import React from "react";
import styled from "styled-components";
import Link, { LinkProps } from "next/link";
import { TweenLite } from "gsap";

interface Props {
  animationDelay?: number;
  children?: React.ReactNode;
  href: string;
}

interface State {
  isMounted: boolean;
}

export class NavLink extends React.Component<Props, State> {
  public animationTarget: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMounted: false
    };
  }

  public componentDidMount() {
    this.setState({ isMounted: true });

    if (this.animationTarget) {
      TweenLite.set(this.animationTarget, {
        opacity: 0,
        y: 10
      });
      TweenLite.to(this.animationTarget, 0.2, {
        opacity: 1,
        y: 0
      }).delay(2);
    }
  }

  public render() {
    return (
      <Link {...this.props}>
        <StyledLink href={this.props.href}>
          <div style={{ overflow: "hidden" }}>
            <div
              ref={ref => (this.animationTarget = ref)}
              style={{
                visibility: this.state.isMounted ? "visible" : "hidden"
              }}
            >
              {this.props.children}
            </div>
          </div>
        </StyledLink>
      </Link>
    );
  }
}

const StyledLink = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.5rem;
`;
