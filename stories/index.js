import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import Custom from './../src/components/custom/custom';
import List from './../src/components/listDrop/list';
import FeedbackItem from '../src/components/feedback_item/FeedbackItem';
import Type from '../src/components/feedback_item/Type';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Custom', module)
  .add('word doc', () => <Custom fileName="somefile.doc" date="2008-09-22T13:57:31.2311892-04:00"/> ) // You cannot have two components like this
  .add('pdf', () => <Custom fileName="letsPlay.pdf" date="1994-12-30T13:57:31.2311892-04:00" />);

storiesOf('List', module)
  .add('word doc', () => <Custom fileName="somefile.doc" date="2008-09-22T13:57:31.2311892-04:00"/> ) // You cannot have two components like this
  .add('pdf', () => <Custom fileName="letsPlay.pdf" date="1994-12-30T13:57:31.2311892-04:00" />)
  .add('word doc2', () => <Custom fileName="letsPlay.pdf" date="" />);

storiesOf('FeedbackItem', module)
  .add('Main', () => (
  	<FeedbackItem name='Main'/>
  ))
  .add('Type', () => (
  	<Type />
  	));

