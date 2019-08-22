import React from 'react'
import './AlertMessageComponent.css';
import closeImage from '../../assets/images/close.png';
import successImage from '../../assets/images/checked.png';

let messageImage;

const AlertMessageComponent = ({ alertMessageTitle, alertMessageType, closeSubmitMessage }) => {

    if (alertMessageType === 'success') {
        messageImage = successImage;
    }

    return (
        <div className="alert__message">
            <div className="alert__message--container">
                <div className="alert__message--close">
                    <img src={closeImage} style={{ cursor: 'pointer' }} onClick={() => closeSubmitMessage()} alt="" />
                </div>
                <div className="alert__message--image">
                    <img src={messageImage} alt="" />
                </div>
                <span className="alert__message--title">{alertMessageTitle}</span>
            </div>
        </div>
    )
}

export default AlertMessageComponent;