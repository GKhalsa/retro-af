import React, {Component} from 'react'
import Modal from 'react-modal';
import './ArchiveRetroModal.css';
import { archiveFullRetro } from '../../api/PanelAPI'


export default class ArchiveRetroModal extends Component {
    state = {
        modalIsOpen: false
    };

    openModal = () =>  {
        this.setState({modalIsOpen: true});
    }

    // afterOpenModal() {
    //     references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    // }

    closeModal = () =>  {
        this.setState({modalIsOpen: false});
    };

    closeModalAndArchiveRetro = () => {
        archiveFullRetro(this.props.path);
        this.closeModal();
    };

    render () {
        return (
            <div className="action-items__header__button">
                <div onClick={this.openModal}>Archive Retro</div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="modal__internal"
                    overlayClassName="modal__external"
                    contentLabel="Example Modal"
                >

                    <div className="modal__text">
                        <div>Archiving this retro will keep the action items, but remove all retro cards.</div>
                        <div className="modal__text--ok">Is this ok?</div>
                    </div>

                    <div className="modal__button--container">
                        <button onClick={this.closeModalAndArchiveRetro} className="modal__button modal__button--red">YES</button>
                        <button onClick={this.closeModal} className="modal__button modal__button--grey">NO</button>
                    </div>

                </Modal>
            </div>
        )
    }
}