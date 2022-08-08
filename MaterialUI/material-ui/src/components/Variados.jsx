import { Alert, AlertTitle, Badge, Box, Chip, Paper, Stack, styled } from "@mui/material";
import { Mail } from "@mui/icons-material";

export const Badges = () =>{
    return(
        <Badge badgeContent={4} color="primary">
            <Mail color="action"/>
        </Badge>
    );
}

export function Chips() {
    return (
        <>
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />
        </>
    );
}

export function Alerts() {
    return (
        <>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Esta es una alerta de error</Alert>
            <Alert severity="warning">Esta es una alerta de error</Alert>
            <Alert severity="info">Esta es una alerta de error</Alert>
            <Alert severity="success">Esta es una alerta de error</Alert>
        </>
    );
}

export const BasicStack = () => {
    return (
        <Box sx={{ width: '100%'}}>
            <Stack spacing={2}>
                {/* <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item> */}
            </Stack>
        </Box>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palete.mode === 'dark' ? '#1a2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));