import {ADD_COMMENTS, TOGGLE_MODAL, GET_IMAGES_DATES, GET_IMAGE_BIG, ALERT_RESPONS,  } from "../data/constants";


const initialState = {
  imgDates: [],
  imgBig: null,
  showModal: false,
  alert: '',
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_IMAGES_DATES:
      return { ...state, imgDates: [ ...action.payload] };

    case GET_IMAGE_BIG:      
      return { ...state, imgBig:  {...action.payload} };

    case ADD_COMMENTS:
      return { ...state, commentsSt: [...state.commentsSt, {...action.comment}] };

    case TOGGLE_MODAL:
      return { ...state, showModal: action.value };
 
    case ALERT_RESPONS:
    return { ...state, alert: action.payload };

    default:
      return state;
  }
};
