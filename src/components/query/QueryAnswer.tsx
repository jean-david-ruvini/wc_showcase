"use client"
// some neccessory packages
import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const QueryAnswer = ({ data }: any) => {
    return (
        <div className='quest-answer' key={data?.id}>
            <div className='query-class' >
                <Box
                    sx={{
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Image src={'/assests/images/info outline_.svg'} alt="products" width={32} height={32} />
                    <Typography
                        variant="body1"
                        color="#000"
                        fontSize={21}
                        component="p"
                        paddingLeft={'10px'}
                    >
                        {data.query}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: '0px 15px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="body1" color="#000" lineHeight={'18.41px'} fontSize={14} textAlign={'justify'} component="p">
                        {data.answer}
                    </Typography>
                </Box>
            </div>

        </div>
    );
};

export default memo(QueryAnswer);
