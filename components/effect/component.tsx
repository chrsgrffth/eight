import React from "react";
import styled from "styled-components";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  Mesh,
  ShaderMaterial,
  TextureLoader,
  PlaneBufferGeometry,
  LinearFilter
} from "three";
import { vertex, fragment } from "./gl";
import { Power4, TweenLite } from "gsap";
import Router from "next/router";

const MAIN_IMAGE = "https://images.unsplash.com/photo-1542751371-adc38448a05e";
const DISP_IMAGE = "https://images.unsplash.com/photo-1542751371-adc38448a05e";

interface Props {
  linkTo?: string;
}

interface State {
  isMounted: boolean;
}

const Aspect = styled.div`
  position: relative;

  * {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f2f3f5;
  }

  &:before {
    content: "";
    display: block;
    padding-bottom: ${(9 / 24) * 100}%;
  }
`;

export class Effect extends React.Component<Props, State> {
  public tween: any = [];
  public element: any = [];

  constructor(props: Props) {
    super(props);

    this.state = {
      isMounted: false
    };
  }

  public componentDidMount() {
    this.setState({ isMounted: true });

    this.startEffect();

    TweenLite.set(this.tween, {
      width: 0,
      height: 1,
      opacity: 0,
      y: "15vh"
    });

    TweenLite.to(this.tween, 1, { opacity: 1, width: "100%" });
    TweenLite.to(this.tween, 1, { height: "100%", y: 0 }).delay(1);

    // TweenLite.set(this.tween, {
    //   width: 1,
    //   height: 0,
    //   x: 100,
    //   opacity: 0
    // });
    // TweenLite.to(this.tween, 1, {
    //   height: "100%",
    //   opacity: 1
    // });
    // TweenLite.to(this.tween, 1, {
    //   ease: Power4.easeInOut,
    //   width: "100%",
    //   x: 0
    // }).delay(1);
  }

  public render() {
    if (!this.element) {
      return <div>Nothing yet.</div>;
    }

    return (
      <Aspect>
        <a
          onClick={this.handleClick}
          href={this.props.linkTo}
          style={{
            overflow: "hidden",
            visibility: this.state.isMounted ? "visible" : "hidden"
          }}
          ref={ref => (this.tween = ref)}
        >
          <div ref={ref => (this.element = ref)} />
        </a>
      </Aspect>
    );
  }

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    TweenLite.to(this.tween, 1, {
      ease: Power4.easeInOut,
      height: 0,
      y: "15vh",
      onComplete: () => {
        Router.push(this.props.linkTo);
      }
    });

    // TweenLite.to(this.tween, 1, {
    //   ease: Power4.easeInOut,
    //   width: 0,
    //   x: 100,
    //   onComplete: () => {
    //     Router.push(this.props.linkTo);
    //   }
    // });
  };

  private startEffect = () => {
    const scene = new Scene();
    const renderer = new WebGLRenderer({ antialias: false });
    renderer.setSize(this.element.offsetWidth, this.element.offsetHeight);
    renderer.setClearColor(0xf2f3f5, 1.0);

    const camera = new OrthographicCamera(
      this.element.offsetWidth / -3,
      this.element.offsetWidth / 3,
      this.element.offsetHeight / 2,
      this.element.offsetHeight / -2,
      1,
      1000
    );
    camera.position.z = 1;

    this.element.appendChild(renderer.domElement);

    const loader = new TextureLoader();
    loader.crossOrigin = "";

    const texture1 = loader.load(
      `${MAIN_IMAGE}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${this.element.offsetWidth}&q=80`
    );

    const texture2 = texture1;

    texture1.magFilter = texture2.magFilter = LinearFilter;
    texture1.minFilter = texture2.minFilter = LinearFilter;

    texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture2.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const material = new ShaderMaterial({
      uniforms: {
        effectFactor: { type: "f", value: 0.5 },
        dispFactor: { type: "f", value: 0 },
        texture: {
          type: "t",
          value: texture1
        },
        texture2: {
          type: "t",
          value: texture2
        },
        disp: {
          type: "t",
          value: loader.load(
            `${DISP_IMAGE}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${this.element.offsetWidth}&q=80`
          )
        }
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      opacity: 1
    });

    var geometry = new PlaneBufferGeometry(700, 400, 1);
    var object = new Mesh(geometry, material);

    scene.add(object);

    let dispFactor = 0.0;
    let reversed = false;

    const animate = function() {
      requestAnimationFrame(animate);

      if (dispFactor <= 1.0) {
        dispFactor += 0.001;
      }

      if (!reversed && dispFactor >= 1.0) {
        dispFactor = 0.0;
      }

      material.uniforms.dispFactor.value = dispFactor;
      renderer.render(scene, camera);
    };
    animate();
  };
}
