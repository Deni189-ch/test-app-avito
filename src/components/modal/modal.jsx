import React from "react";
import { useDispatch } from "react-redux";

import { Input } from 'antd';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import "./style.scss";


export const Modal = ({addComment, setToggleModal, imgBig, commentsSt, alert, setAlert}) => {
  const [state, setState] = React.useState({
    submitting: false,
    name: '',
    comments: '',
    error: false
  });

  const dispatch = useDispatch();
  const messagesEndRef = React.useRef(null);
  const {name, comments, error} = state;
  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [commentsSt]);

  const exitHandler = () => {
    dispatch(setToggleModal(false))
    dispatch(setAlert(null))
  };
  
  const onChangeInput = (e) => {
    if(error) {
      setState({
        ...state,
        ...{ [e.target.name]: e.target.value },
        error: false
      })
    } else {
      setState({
        ...state,
        ...{ [e.target.name]: e.target.value }
      })
    }
  };

  const handleSubmit = () => {
      if ( name.trim() && comments.trim() ) {
        dispatch(addComment(imgBig.id, {name: name, comment: comments,} ));
        setState({...state, name: '', comments: ''})
      } else {
        setState({...state, error: true})
      }
  };

  const handleKeyDown = (e) => {
    (e.keyCode === 27) && exitHandler();
    (e.keyCode === 13) && handleSubmit();
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        `код ошибки: ${alert} Если код ошибки 204, запрос отработал как положенно`,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <div className="modal" >
      <div className="modal__wrappet" onKeyDown={handleKeyDown}>
        <div className="modal__exit" onClick={exitHandler} />

        <div className="modal__column-left">
          <div className="modal__imgWrapper">
            <img src={imgBig.url} alt="loading..." className="madal__img"/>
          </div>

          <Input placeholder="Ваше имя"
            value={name}
            name="name"
            className="ant-input"
            onChange={onChangeInput}
            />
          <Input placeholder="Ваш коментарий"
            className="ant-input"
            value={comments}
            name="comments"
            onChange={onChangeInput}
            />
          <input onClick={handleSubmit} type="button" value="оставить коментарий" className="madal_btn-submit"/>  

          {error && <p className="modal__error-text">заполните все поля</p>}
        </div>

        <div className="modal__column-right">
          {
            imgBig.comments.map(({id, name, date, text}) => {
              return <>
                <div className="madal__comments-name" key={id}>{name} {("" + (new Date( date )).toISOString())
                  .replace(/^([^T]+)T(.+)$/,'$1')
                  .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')}
                </div>
                <div className="madal__comments-text">{text}</div>
              </>
            })
          }
          <div ref={messagesEndRef} />
        </div>
      </div>

      { alert &&
        <Button type="primary" onClick={openNotification}>
         Open the notification box
        </Button>
      }
  </div>
  );
};

