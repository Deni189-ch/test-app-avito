import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Modal} from "./modal";

import {addComment, setToggleModal, setAlert} from "../../redux/actions";
import "./style.scss";

export const ContainerModal = () => {

  const dispatch = useDispatch()

  const imgBig = useSelector(state => state.state.imgBig);
  const commentsSt = useSelector(state => state.state.commentsSt);
  const alert = useSelector(state => state.state.alert);

  return (
    <Modal 
      addComment={addComment}
      dispatch={dispatch}
      setToggleModal={setToggleModal}
      imgBig={imgBig}
      commentsSt={commentsSt}
      alert={alert}
      setAlert={setAlert}
    />
  );
};