'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, boxShadow: '0px 4px 4px 0px #ffffff33' }}>
            <AppBar
                position="static"
                sx={{ bgcolor: '#1D85FE', justifyContent: 'center' }}
            >
                <Toolbar sx={{ paddingLeft: '5px',paddingRight: '5px' }}>
                    <Image src={"/assests/images/white_trans.png"} alt='' width={250} height={50} placeholder={"blur"} blurDataURL='WISECUES!' />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex' }}>
                        <MenuIcon sx={{ height: '34px', width: '34px' }} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header