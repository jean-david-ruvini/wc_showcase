"use client"
// some neccessory packages
import React, { memo } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { formatCurrency } from '@/common/formatCurrency/formatCurrency';
import { ShoppingCart } from '@mui/icons-material';

const Products = ({ data }: any) => {
    const imageUrl = data?.img_urls?.length !== 0 ? data.img_urls[0] : '/assests/images/unnamed.jpg';
    return (
        <React.Fragment key={data?.id}>
            <div className='rendred-item'>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '12px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {data.query && (
                        <div className='searched-with-query'>
                            <Box
                                sx={{
                                    padding: '15px 0px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '15px',
                                    paddingBottom: 'unset',
                                    width: { xs: '-webkit-fill-available', md: '400px' },
                                }}>
                                <Image src={'/assests/images/filter.svg'} alt="products" width={20} height={10} />
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
                        </div>
                    )}
                    <Card
                        sx={{
                            padding: '15px',

                        }}
                        key={data.id}
                    >
                        <div className='crad' style={{ display: 'flex', alignItems: 'center', }}>
                            <div className='prod-image'>
                                <img src={imageUrl} alt="products" width={100} height={100} />
                            </div>
                            <CardContent sx={{ width: "100%", backgroundColor: "#fff", paddingTop: '0px', paddingBottom: '10px !important' }}>
                                <Typography title={data.title} variant="h1" color="#141CE9EB" fontWeight={700} gutterBottom fontSize={14}>
                                    {data.title?.substring(0, 60) + '...'}
                                </Typography>
                                <Typography sx={{ fontSize: 20 }} mt={2} fontWeight={700} gutterBottom color="#000">
                                    {formatCurrency(data.final_price ? data.final_price : '00.00')}
                                </Typography>
                                <Button variant="contained" sx={{
                                    backgroundColor: 'yellow', color: "#000", fontSize: '12px', fontWeight: 700, width: "100%", height: "33px", boxShadow: 'none', border: '1px solid blue', marginTop: '2rem', textTransform: 'none', ':hover': {
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                    },
                                }}
                                    startIcon={<ShoppingCart />}
                                >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </div>
                        <Typography
                            variant="body1"
                            color="#000"
                            fontSize={12}
                            component="p"
                            mt={1}
                            title={data.description}
                        >
                            {data.description?.substring(0, 100) + '...'}
                        </Typography>
                    </Card>

                </Box>
            </div>
        </React.Fragment>
    );
}
export default memo(Products)