import React from 'react';
import { Title, InverseTitle, AnimatedTitle, DynamicTitle } from './styled';
import {GlobalStyles} from './global';

export default function CustomApp() {
  return (
    <div>
            <h1>React App with Styled Components</h1>
            <Title>First Title Element</Title>
            <InverseTitle>Second Title Element</InverseTitle>
            <AnimatedTitle>Third Title Element</AnimatedTitle>
            <DynamicTitle>Fourth Title Element</DynamicTitle>
            <DynamicTitle inverted size="4rem">
            Fourth Title Element
            </DynamicTitle>
    </div>
  )
}
