import React from 'react';

import Modal from 'react-modal';

const OptionModal = props => (

    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption} // quand on appuie sur escape ou quand on clique endehors du dialog
        contentLabel="Selected option"
        closeTimeoutMS={200} // 200 ms temps pour se fermer
        className="modal" // pour styliser
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button"  onClick={props.handleClearSelectedOption}>Okay</button>

    </Modal>

);


export default OptionModal;
