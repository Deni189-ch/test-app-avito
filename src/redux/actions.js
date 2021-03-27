import { TOGGLE_MODAL, GET_IMAGES_DATES, GET_IMAGE_BIG, POST_COMMENT_ADD, ALERT_RESPONS } from "../data/constants";
import { imagesAPI } from "../api/api";


export const getImagesDates = () => async (dispatch) => {
  const response = await imagesAPI.getImages()
  if (response.request.status === 200) {
      const payload = response.data
      dispatch({ type: GET_IMAGES_DATES, payload })
  } else {
    debugger
  }
};


export const getImageBig = (imgId) => async (dispatch) => {
  const response = await imagesAPI.getImgBig(imgId)
  if (response.request.status === 200) {
      const payload = response.data
      dispatch({ type: GET_IMAGE_BIG, payload })
  } else {
    debugger
  }
};


export const addComment = (imgId, comment) => async (dispatch) => {
  const response = await imagesAPI.postComment(imgId, comment)
  if (response.request.status === 200) {
      const payload = response.data
      dispatch({ type: POST_COMMENT_ADD, payload })
  } else {
    const payload = response.request.status
    dispatch({ type: ALERT_RESPONS, payload })
  }
};


export function setToggleModal(value) {  
  return (dispatch) => {
    dispatch({ type: TOGGLE_MODAL, value });
  }
};


export function setAlert(payload) {  
  return (dispatch) => {
    dispatch({ type: ALERT_RESPONS, payload });
  }
};
