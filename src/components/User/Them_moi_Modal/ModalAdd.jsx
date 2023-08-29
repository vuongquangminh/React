import React, { useContext } from 'react';
import { Button, Modal } from 'antd';
import { loginContext } from '../../../useContext/loginContext';
const ModalAdd = ({children, text}) => {
  const { open, setOpen } = useContext(loginContext);

  const showModal = () => {
    setOpen(true);
  };


  return (
    <>
      <Button type='transperant' onClick={showModal} className='text-dark'>
        {text}
      </Button>
      <Modal
        open={open}
        footer={null}
        
        closeIcon = {null}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      >
        {children}
      </Modal>
    </>
  );
};
export default ModalAdd;