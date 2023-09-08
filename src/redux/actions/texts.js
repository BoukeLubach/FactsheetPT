import {
    SET_CURRENT_SITUATION,
    SET_ROOM_FOR_IMPROVEMENT,
    SET_MEASURE,
    SET_RISKS,
  } from "../constants/action-types";
  
  export const setCurrentSituation = (situation) => {
    return {
      type: SET_CURRENT_SITUATION,
      payload: situation,
    };
  };
  
  export const setRoomForImprovement = (room) => {
    return {
      type: SET_ROOM_FOR_IMPROVEMENT,
      payload: room,
    };
  };
  
  export const setMeasure = (measure) => {
    return {
      type: SET_MEASURE,
      payload: measure,
    };
  };
  
  export const setRisks = (risks) => {
    return {
      type: SET_RISKS,
      payload: risks,
    };
  };
  