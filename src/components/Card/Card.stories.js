import React from 'react';
import Card from 'components/Card/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Unvisited = () => (
  <Card status="unvisited" />
);
export const Liked = () => (
  <Card status="liked" />
);
export const Notliked = () => (
  <Card status="notliked" />
);
