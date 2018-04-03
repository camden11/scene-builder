import ActionTypes from "../actions/ActionTypes";
import { RequestStatus } from "../constants";
import buildResults from "../utils/buildResults";

const initialState = {
  results: [],
  status: RequestStatus.UNITIALIZED
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INDICO_ANALYZE_REQUEST:
      return {
        ...state,
        status: RequestStatus.PENDING
      };
    case ActionTypes.INDICO_ANALYZE_SUCCESS:
      const results = buildResults(action.payload.results);
      return {
        results: state.results.concat([results]),
        status: RequestStatus.SUCCESS
      };
    case ActionTypes.INDICO_ANALYZE_ERROR:
      return {
        ...state,
        status: RequestStatus.FAILURE
      };
    default:
      return state;
  }
};
