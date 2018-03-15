import ActionTypes from "../actions/ActionTypes";
import { RequestStatus } from "../constants";
import buildResults from "../utils/buildResults";

const initialState = {
  results: {
    sentiment: 0,
    emotion: {
      anger: 0,
      fear: 0,
      joy: 0,
      sadness: 0,
      surprise: 0
    },
    keywords: [],
    personality: {
      agreeableness: 0,
      conscientiousness: 0,
      extraversion: 0,
      openness: 0
    },
    topics: {
      health: 0,
      jobs: 0,
      nostalgia: 0,
      relationships: 0,
      romance: 0,
      school: 0,
      weather: 0
    }
  },
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
      console.log(results);
      return {
        results,
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
