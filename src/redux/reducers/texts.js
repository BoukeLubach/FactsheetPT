import {
  SET_CURRENT_SITUATION,
  SET_ROOM_FOR_IMPROVEMENT,
  SET_MEASURE,
  SET_RISKS,
} from "../constants/action-types";

const initialState = {
  isLoadingData: false,
  currentSituation: "",
  roomForImprovement: "",
  measure: "",
  risks: "",

};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SITUATION:
      return {
        ...state,
        currentSituation: action.payload,
      };

    case SET_ROOM_FOR_IMPROVEMENT:
      return {
        ...state,
        roomForImprovement: action.payload,
      };

    case SET_MEASURE:
      return {
        ...state,
        measure: action.payload,
      };

    case SET_RISKS:
      return {
        ...state,
        risks: action.payload,
      };

    default:
      return state;
  }
}