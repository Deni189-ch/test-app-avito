import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { headerTitle } from "../../data/data";
import {ContainerModal} from "../modal/container-modal";
import { getImagesDates, getImageBig, setToggleModal, } from "../../redux/actions";

import "./style.scss";


export const MainPage = () => {

  const dispatch = useDispatch();

  const imgDates = useSelector(state => state.state.imgDates);
  const imgBig = useSelector(state => state.state.imgBig);
  const showModal = useSelector(state => state.state.showModal);

  React.useEffect(()=> { dispatch(getImagesDates()) }, []);

  const showeModalHandler = (event) => {
    const imgId = event.currentTarget.dataset.images
    dispatch(getImageBig(imgId));
    dispatch(setToggleModal(true));
  };
  
  const printImg = imgDates.map(({ id, url }) => {
    return (
      <span key={id}
      className="main__img-wrapper"
      onClick={showeModalHandler}
      data-images={id}
      >
      <img src={url} alt="img loading..." className="main__img" />
      </span>
    )
  });

  return (
    <div className="main">
      <h1 className="main__header">{headerTitle}</h1>

      <div className="main__setka-img">{printImg}</div>

      <div className="main__footer">
        <span className="main__footer-year"> &copy; 2020 &mdash; 2021</span>
      </div>

      { showModal && imgBig && <ContainerModal /> }
    </div>
  );
};
