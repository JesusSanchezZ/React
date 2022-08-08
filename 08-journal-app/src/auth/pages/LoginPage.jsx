import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Grid, TextField, Typography, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

const formValidations = {
    email: [ (value) => value.length >=1, 'El correo es necesario'],
    password: [ (value) => value.length >= 1, 'El password es necesario']
}

const formData = {
    email: 'jesus@sanchez.com',
    password: '123456'
}

export const LoginPage = () =>{
    const { status, errorMessage } = useSelector( state => state.auth );
    const [formSubmitted, setFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const { 
        email, password, onInputChange, formState,
        isFormValid, emailValid, passwordValid 
    } = useForm(formData, formValidations);

    const isAuthenticated = useMemo( () => status === 'checking', [status]);

    // useEffect(() => {
    //     dispatch( checkingAuthentication() );
    // },[]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        // dispatch( checkingAuthentication() );
        // console.log({ email, password });
        if(!isFormValid) return;
        dispatch( startLoginWithEmailPassword({email, password}) );
    }

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() );
        console.log('onGoogleSignIn');
    }

    return (
        <AuthLayout title="Login">
            <form 
                className='animate__animated animate__fadeIn animate__faster'
                onSubmit={ onSubmit }
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                            display={ !!errorMessage ? '':'none'}
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled={ isAuthenticated }
                                type="submit" 
                                variant="contained" 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled={ isAuthenticated }
                                onClick={ onGoogleSignIn } 
                                variant="contained" 
                                fullWidth
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}