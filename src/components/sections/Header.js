import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import bgImage from '../../images/art/steakpool-grilled-steak.jpg';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "steak" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            {/* <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art> */}
            <Text>
              <h1>
                Steakpool.io
                <br />
                Staking for the masses
                <br />
                GET SOME
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://staking.cardano.org/">
                  Find out more &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  padding-top: 96px;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }

  &:before {
  background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.1)),
              url(${bgImage}) no-repeat bottom;
  background-size: cover;
  content: "";
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  z-index: -1;
}
`;

const Art = styled.figure`
  opacity:0.8;
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  height:70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: ${props => props.theme.color.white.regular};
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: ${props => props.theme.color.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.secondary};
  }
`;

export default Header;
