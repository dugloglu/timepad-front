import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const Header: React.FC = () => {
    const token = localStorage.getItem('token');
    const login = localStorage.getItem('login')

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button color="inherit" href="/">
                        Timepad
                    </Button>
                    {token ? (
                        <>
                        <Button color="inherit" href="/addevent">
                            Добавить событие
                        </Button>
                        <Button color="inherit" >
                            {login}
                        </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" href="/login">
                                Войти
                            </Button>
                            <Button color="inherit" href="/register">
                                Регистрация
                            </Button>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
