import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const button = {
    position: 'absolute',
    top: 0,
    right: 0
};

const EmployeeModal = (props) => {
    const handleClose = () => {
        props.setOpen(false);
    }
    console.log(props.data);
    return <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            City: {props.data.city}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Street: {props.data.street}
          </Typography>
          <Typography id="modal-modal-description">
            Phone: {props.data.phone}
          </Typography>
          <Typography id="modal-modal-description">
            Website: {props.data.website}
          </Typography>
          <Button onClick={handleClose} sx={button}><CancelPresentationIcon/></Button>
        </Box>
    </Modal>
};

export default EmployeeModal;