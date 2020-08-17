import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import { VisibilityFilters } from 'actions';

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

const filterCards = (cards, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cards.filter((card) => card);
    case VisibilityFilters.SHOW_LIKED:
      return cards.filter((card) => card.status === 'liked');
    case VisibilityFilters.SHOW_UNVISITED:
      return cards.filter((card) => card.status === 'unvisited');
    case VisibilityFilters.SHOW_NOTLIKED:
      return cards.filter((card) => card.status === 'notliked');
    default:
      return cards;
  }
};

const mapStateToProps = (state) => ({
  cards: filterCards(state.rootReducer.cards, state.visibilityFilter),
});

export default connect(mapStateToProps)(RestaurantsCards);
