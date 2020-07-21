import React from 'react';
import Card from 'components/Card/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Unvisited = () => (
  <Card />
);
export const Liked = () => (
  <Card liked />
);
export const Notliked = () => (
  <Card notliked />
);
