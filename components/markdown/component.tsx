import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

interface Props {
  children?: string;
}

const StyledMarkdown = styled.div`
  text-align: justify;

  p {
    line-height: 1.7;
    margin-bottom: 2em;
  }

  strong {
    font-weight: 400;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }

  ol {
    margin-bottom: 1em;
  }

  img {
    max-width: 100%;
  }
`;

export const Markdown = (props: Props) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown>{props.children}</ReactMarkdown>
    </StyledMarkdown>
  );
};
