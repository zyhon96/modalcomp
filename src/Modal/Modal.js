// import React, { useEffect } from 'react'

const Modal = props => {
    if (!props.show) {
        return null
    }

    // const closeOnEscapeKeyDown = (e) => {
    //     if ((e.charCode || e.keyCode) === 27) {
    //         props.onClose();
    //     }
    // }

    // useEffect(() => {
    //     document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    //     return function cleanup() {
    //         document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    //     }
    // }, [])




    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Modal Title</h4>
                </div>
                <div className="modal-body">
                    This is modal content
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
