import { Button, IconButton } from '@mui/material';
import { Camera, Delete, Alarm, AddShoppingCart, Fingerprint } from '@mui/icons-material';

export const Botones = () => {
    return (
        <>
            <Button color="secondary">Secondary</Button>
            <Button color="primary">Primary</Button>
            <Button color="error">Error</Button>
            <Button color="success">Success</Button>
            <Button color="warning" sx={{ mr: 2}}>Secondary</Button>
            <br />
            
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="contained" color="primary">
                Success
            </Button>
            <Button variant="contained" color="secondary">
                Success
            </Button>
            <Button variant="contained" color="error">
                Success
            </Button>
            <Button variant="contained" color="warning">
                Success
            </Button>
            <br />

            <Button variant="outlined" color="secondary">
                Error
            </Button>
            <Button variant="outlined" color="primary">
                Error
            </Button>
            <Button variant="outlined" color="success">
                Error
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            <Button variant="outlined" color="warning" startIcon={<Camera />} endIcon={<Camera />}>
                Error
            </Button>
            <br />
            <IconButton aria-label='delete'>
                <Delete />
            </IconButton>

            <IconButton aria-label='add an alarm'>
                <Alarm />
            </IconButton>

            <IconButton color="primary" aria-label='add to shopping cart'>
                <AddShoppingCart />
            </IconButton>

            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
        </>
    )
}