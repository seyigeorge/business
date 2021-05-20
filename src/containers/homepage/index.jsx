import React from "react";
import styled from "styled-components";
import { AboutSection } from "../../components/about";
import { Footer } from "../../components/footer";
import Introduction from "../../components/introduction";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <MoreAboutSection />

      <Marginer direction="vertical" margin="2em" />
      <AboutSection />
      <Introduction />

      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
}
