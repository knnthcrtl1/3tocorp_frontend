import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ children, onCloseModal }) => {

    return (
        <div>
            <div className="modal__component" onClick={() => { onCloseModal() }}>
            </div>
            <div className="modal__compontent--container">
                <div className="container">
                    <div className="row">
                        <div className="modal__component--content">
                            <div className="modal__component--close">
                                <span onClick={() => { onCloseModal() }}>Close</span>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent;