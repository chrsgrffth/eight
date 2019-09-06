import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

interface Props {
  children?: string;
}

const StyledMarkdown = styled.div`
  p {
    line-height: 1.7;
    margin-bottom: 2em;
  }

  h1 {
    font-size: 3rem;
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
`;

export const Markdown = (props: Props) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown>{props.children}</ReactMarkdown>
    </StyledMarkdown>
  );
};
