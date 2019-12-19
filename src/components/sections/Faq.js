import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'How do I stake with you?',
    content: () => (
      <>
        Go to the Delegation Center in Daedalus or Yoroi, and then find Epic Stake Pool.
        <br/>
        We’re registered under the ticker STKPL.
      </>
    ),
  },
  {
    title: 'What is Cardano, Shelley?',
    content: () => (
      <>
        The decentralised future of blockchain, with incentives, rewards, scalability and security.
        <br/>
        <ExternalLink href="https://staking.cardano.org/">Find out more</ExternalLink>
      </>
    ),
  },
  {
    title: 'Is there any risk in staking?',
    content: () => (
      <>
        No. Your funds will stay safe in your wallet, and we will never be able to access them.
        <br/>
        You should NEVER send your ADA to anyone when staking – the funds should always stay in your wallet.
      </>
    ),
  },
  {
    title: 'How do I get my rewards?',
    content: () => (
      <>
        Your staking rewards will be paid to your wallet every day. The system will give you a reward wallet where you can access them. This is part of the Cardano protocol, and not something we have any influence over.
        <br/>
        Once the incentiviced testnet phase is over, all rewards will be transfered to your real account on mainnet.
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
