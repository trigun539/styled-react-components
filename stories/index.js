import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import FeedbackItem from '../src/components/feedback_item/FeedbackItem';
import Type from '../src/components/feedback_item/Type.js';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('FeedbackItem', module)
  .add('Main', () => (
  	<FeedbackItem name='Main'/>
  ))
  .add('Type', () => (
  	<Type />
  	));