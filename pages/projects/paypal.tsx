import React from "react";
import { SiteLayout } from "../../components/site-layout";
import styled from "styled-components";
import { Color } from "../../types/design";

const ProjectBanner = styled.div`
  height: 110vh;
  background: ${Color.PayPal};
`;

const PayPalPage = () => {
  return (
    <ProjectBanner>
      <SiteLayout>
        <div style={{ display: "block", height: "200vh" }} />
      </SiteLayout>
    </ProjectBanner>
  );
};

export default PayPalPage;
