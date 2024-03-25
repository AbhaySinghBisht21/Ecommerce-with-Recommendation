import {
  RECOMMENDATION_FAIL,
  SET_RECOMMENDATION,
} from "../constants/recommendationConstants";

export const recommendations = async (dispatch) => {
  try {
    dispatch({
      type: SET_RECOMMENDATION,
    });
  } catch (error) {
    dispatch({
      type: RECOMMENDATION_FAIL,
      payload: error.response.data.message,
    });
  }
};
