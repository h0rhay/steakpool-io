import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import CardanoLogo from '@images/logos/cardano-logo-b.png';
import Emurgo from '@images/logos/emurgo-logo-b.png';
import Adatainment from '@images/logos/adatainment-logo-b.png';
import CardanoEffect from '@images/logos/cardano-effect-b.png';
import Reddit from '@images/logos/reddit-logo-b.png';
// import { ReactComponent as Reddit } from '@images/logos/reddit-logo-b.png';

const LOGOS = [
  {
    logo: CardanoLogo,
    link: 'https://www.cardano.org/en/home/',
  },
  {
    logo: Emurgo,
    link: 'https://emurgo.io/en',
  },
  {
    logo: Adatainment,
    link: 'https://www.adatainment.com/',
  },
  {
    logo: CardanoEffect,
    link: 'https://www.youtube.com/channel/UCdsCDVHKVIuTlziDW7Wg3NQ',
  },
  {
    logo: Reddit,
    link: 'https://www.reddit.com/r/cardano/',
  }
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="ecosystem" accent>
        <StyledContainer>
          <div>
            <h1>Cardano Community</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={logo} width='150px'/>
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
