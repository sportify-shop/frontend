import React from 'react';
import styled from "@emotion/styled";
import StaticPageTemplate from "@/common/pages/templates/StaticPageTemplate";
import Section from '../components/section';

const HomeSection = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  
  background: #fff;
  background-size: cover;

  &:before {
    content: "";

    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    backdrop-filter: brightness(50%);
  }
`

const HomePage: React.FC = () => {
  return (
    <StaticPageTemplate>
      <HomeSection>
        <h1> Home page </h1>
      </HomeSection>
    </StaticPageTemplate>
  );
};

export default HomePage;
