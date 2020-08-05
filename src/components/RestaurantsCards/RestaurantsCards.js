import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom:50px;
  flex-wrap: wrap;
  overflow: auto;
  max-height:84vh;
`;

const RestaurantsCards = ({ cards }) => (
  <Wrapper>
    {cards.map(({
      id, name, imageUrl, link, description, status,
    }) => (
      <Card
        key={id}
        id={id}
        name={name}
        imageUrl={imageUrl}
        link={link}
        description={description}
        status={status}
      />
    ))}
  </Wrapper>
);

RestaurantsCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      imageUrl: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.oneOf(['unvisited', 'liked', 'notliked']),
    }),
  ),
};

RestaurantsCards.defaultProps = {
  cards: [],
};

const mapStateToProps = (state) => {
  const { cards } = state;
  return { cards };
};

export default connect(mapStateToProps)(RestaurantsCards);
