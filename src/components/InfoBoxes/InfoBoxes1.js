import { ImageList, ImageListItem, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

import Box1 from '../../images/Box1.png';
import Box2 from '../../images/Box2.png';
import Box3 from '../../images/Box3.png';
import Box4 from '../../images/Box4.png';
import Box5 from '../../images/Box5.png';

export function InfoBoxes() {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const itemData = [
        {
            img: Box1,
            title: 'Image 1',
        },
        {
            img: Box2,
            title: 'Image 2',
        },
        {
            img: Box3,
            title: 'Image 3',
        },
        {
            img: Box5,
            title: 'Image 4',
        },
        {
            img: Box4,
            title: 'Image 5',
        },
    ];

    const handleOpen = (imgSrc) => {
        setSelectedImg(imgSrc);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ImageList sx={{ flexWrap: 'nowrap', marginTop: '0px' }} cols={itemData.length}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title} onClick={() => handleOpen(item.img)}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'scroll',
                }}
            >
                <Box sx={{ position: 'relative', outline: 'none' }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            color: 'white',
                            zIndex: 10,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={selectedImg}
                        alt="Full size"
                        style={{
                            maxHeight: '80vh',
                            maxWidth: '80vw',
                            objectFit: 'contain',
                            backgroundColor: 'white',
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
}