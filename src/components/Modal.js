import '../css/Modal.css';

function Modal({setModal, setSetModal}) {
    
    return (
        <>
            {setModal.show && (
                <div class="modal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <p>{setModal.message}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" 
                                    onClick={() => setSetModal(prevState => ({ ...prevState, show: false }))
                                }>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
  }
  
  export default Modal;
  