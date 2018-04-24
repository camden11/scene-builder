import ActionTypes from "../actions/ActionTypes";

const initialState = {
  section: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_CURRENT_SECTION:
      return {
        section: state.section + 1
      };
    default:
      return state;
  }
};
