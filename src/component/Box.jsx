import { Stack } from '@mui/material';
import React from 'react';

const CustomBox = ({ onClick, isSelected, emoji }) => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={onClick}
            className='boxShadow'
            sx={{
                width: 90,
                borderRadius: 2,
                margin: 1,
                height: 90,
                backgroundColor: "#2F4553",
            }}
        >
            {
                isSelected && emoji
            }
        </Stack>
    );
}

export default CustomBox;
