import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button color="inherit" href="/">
                        Timepad
                    </Button>
                    <Button color="inherit" href="/login">
                        Войти
                    </Button>
                    <Button color="inherit" href="/register">
                        Регистрация
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
