import { Modal } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '80vh',
  maxWidth: '90vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  outline: 0,
};

function ImgModal({ value }) {
  const { src, open, handleClose } = value;
  return (
    <div>
      <Modal
        sx={{ bgcolor: 'rgba(0, 0, 0, 0.4)' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ outline: 0 }}>
          {src && <img style={style} src={src} />}
        </div>
      </Modal>
    </div>
  );
}

export default ImgModal;
