import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}



export default function DiaLogWrapper({open, onClose,product}) {
  console.log(product)
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
    >
      <DialogTitle
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
         {product.name}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Image src={product.image} width={200} height={200} layout='intrinsic' />
      </DialogContent>
    </Dialog>
  );
}