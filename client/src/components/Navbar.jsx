import React from 'react';
import {AppBar, Box, Button, ButtonGroup, InputBase, Toolbar, Typography, alpha, styled} from '@mui/material';
import {SearchRounded} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Navbar = ({isLogin}) => {
    const navigate = useNavigate();

    //function untuk eksekusi navigasi setelah 500ms tidak ada inputan
    const debouncedNavigate = debounce((keyword) => {
        navigate('/search', {state: {keyword}});
    }, 500);

    const handleLogout = () => {
        localStorage.removeItem('movie-user');
        navigate('/login');
    };

    return (
        <Box>
            <AppBar position='fixed'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Typography variant='h4' color='secondary' component='div' onClick={() => navigate('/')} sx={{cursor: 'pointer'}}>
                        MovieList
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchRounded />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Search…' inputProps={{'aria-label': 'search'}} onChange={(e) => debouncedNavigate(e.target.value)} />
                    </Search>
                    <ButtonGroup sx={{gap: 1}}>
                        {isLogin === true ? (
                            <Button variant='contained' color='secondary' onClick={() => handleLogout()}>
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button variant='outline' onClick={() => navigate('/register')}>
                                    Register
                                </Button>
                                <Button variant='contained' color='secondary' onClick={() => navigate('/login')}>
                                    Login
                                </Button>
                            </>
                        )}
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
