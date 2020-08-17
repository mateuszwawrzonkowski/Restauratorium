// import { connect } from 'react-redux';
// import { VisibilityFilters } from 'actions';
// import RestaurantsCards from 'components/RestaurantsCards/RestaurantsCards';

// const getVisibleCards = ({ cards, filter }) => {
//   switch (filter) {
//     case (VisibilityFilters.SHOW_ALL):
//       return console.log(filter);
//     case VisibilityFilters.SHOW_COMPLETED:
//       return cards.filter((card) => card.status === 'liked');
//     case VisibilityFilters.SHOW_ACTIVE:
//       return cards.filter((card) => card.status === 'unvisited');
//     default:
//       throw new Error(`Unknown filter: ${filter}`);
//   }
// };

// const mapStateToProps = (state) => ({
//   cards: getVisibleCards(state.rootReducer.cards, state.visibilityFilter),
// });

// export default connect(mapStateToProps)(RestaurantsCards);
