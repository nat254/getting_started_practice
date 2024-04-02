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

    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-sub-heading</Heading>
              <Section>
                <Heading>Sub-sub-sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>

    
  );
};