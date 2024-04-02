import React from 'react';
import Heading from './Heading';
import Section from './Section';

export default function PropDrilling(){
  return (
    // <Section>
    //   <Heading level={1}>Title</Heading>
    //   <Heading level={2}>Heading</Heading>
    //   <Heading level={3}>Sub-heading</Heading>
    //   <Heading level={4}>Sub-sub-heading</Heading>
    //   <Heading level={5}>Sub-sub-sub-heading</Heading>
    //   <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
      
    // </Section>

    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Section level={5}>
              <Heading>Sub-sub-sub-heading</Heading>
              <Section level={6}>
                <Heading>Sub-sub-sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>

    
  );
};