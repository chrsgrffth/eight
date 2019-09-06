import * as React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { Grid } from "../../components/grid";
import { Column } from "../../components/column";
import styled from "styled-components";

const Debugger = styled.div`
  background: rgba(241, 155, 255, 0.1);
  box-shadow: 0 0 1px rgba(241, 155, 255, 0.2);
  font-size: 0.75rem;
`;

storiesOf("Library | Grid", module)
  .add("Default", () => (
    <>
      <div style={{ marginBottom: "0.5rem" }}>
        <Grid>
          {[...Array(12)].map(() => (
            <Column columns={1}>
              <Debugger style={{ padding: "1rem" }}>1</Debugger>
            </Column>
          ))}
        </Grid>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Grid>
          {[...Array(6)].map(() => (
            <Column columns={2}>
              <Debugger style={{ padding: "1rem" }}>2</Debugger>
            </Column>
          ))}
        </Grid>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Grid>
          {[...Array(3)].map(() => (
            <Column columns={4}>
              <Debugger style={{ padding: "1rem" }}>4</Debugger>
            </Column>
          ))}
        </Grid>
      </div>
    </>
  ))
  .add("with Gutter", () => (
    <>
      <div style={{ marginBottom: "0.5rem" }}>
        <Grid gutter>
          {[...Array(12)].map(() => (
            <Column columns={1}>
              <Debugger style={{ padding: "1rem" }}>1</Debugger>
            </Column>
          ))}
        </Grid>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Grid gutter>
          {[...Array(6)].map(() => (
            <Column columns={2}>
              <Debugger style={{ padding: "1rem" }}>2</Debugger>
            </Column>
          ))}
        </Grid>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Grid gutter>
          {[...Array(3)].map(() => (
            <Column columns={4}>
              <Debugger style={{ padding: "1rem" }}>4</Debugger>
            </Column>
          ))}
        </Grid>
      </div>
    </>
  ));
