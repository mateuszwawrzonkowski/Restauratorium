import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const AddRestaurant = () => (
  <Button onClick={action('clicked')}>
    <span />
  </Button>
);

export const RemoveButton = () => (
  <Button remove onClick={action('clicked')}>
    <span />
  </Button>
);
