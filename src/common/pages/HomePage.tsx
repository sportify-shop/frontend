import React from 'react';
import styled from "@emotion/styled";
import {Container, Typography} from "@mui/material";
import StaticPageTemplate from "@/common/pages/templates/StaticPageTemplate";

const HomeSection = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  
  background: url('./bg.jpg') center no-repeat;
  background-size: cover;
  background-position: top;

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
        <Container
          sx={{
            textAlign: 'center',
            color: "white",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            zIndex: 1
        }}>
          <Typography
            component="h1"
            sx={{ fontSize: "100px !important" }}
          > SPORTIFY </Typography>
          <Typography
            component="h1"
            sx={{ fontSize: "75px !important", marginTop: "-25px" }}
          > PARÉS POUR L'AUTOMNE </Typography>
        </Container>
      </HomeSection>
    </StaticPageTemplate>
  );
};

export default HomePage;
