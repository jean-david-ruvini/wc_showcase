"use client"
// some neccessory packages
import React, { useState } from 'react';
import { Grid, InputAdornment, TextareaAutosize, Typography } from '@mui/material';
import Image from 'next/image';
import Loaders from '@/common/loader/Loader';
import { showToast } from '@/utils/alertComponents/swalTost';
import dynamic from 'next/dynamic';

// dynamic import so that they will not load untill their state update

const Products = dynamic(() => import('@/components/products/Products'), {
    ssr: false,
});
const QueryAnswer = dynamic(() => import('../components/query/QueryAnswer'), {
    ssr: false,
});

//interface for type script
interface ApiResponse {
    query: string;
    results: any[];
}

const baseURL = `${process.env.basePath}`; // API Base URL

const SearchData = () => {
    const [input, setInput] = useState(''); // input type state
    const [apiResponse, setApiResponse] = useState<ApiResponse>({ results: [], query: '' }); // Binding response in state
    const [noDataFound, setNoDataFound] = useState(); // if no data found state
    const [isLoading, setIsLoading] = React.useState<any>(); // loading state

    // Submit form data
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setIsLoading(true);
            try {
                const response = await fetch(`${baseURL}?q=${encodeURIComponent(input)}&demo=lowes`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                    },
                });
                if (!response.ok) {
                    throw new Error('Internal Server Error');
                }
                const data = await response.json();
                const updatedResults = data.results.length > 0
                    ? [{ ...data.results[0], query: input }, ...data.results.slice(1)]
                    : data.results;

                setApiResponse(prevResponse => ({
                    query: input,
                    results: [...updatedResults, ...prevResponse.results],
                }));
                setNoDataFound(data.num_results);
                setIsLoading(false);
            } catch (error) {
                console.warn(error);
                setIsLoading(false);
                if (error === 'Internal Server Error') {
                    showToast('error', 'Internal Server Error. Please try again later.');
                } else {
                    showToast('error', error);
                }
            }
        }
    };

    // input type change
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
    };

    // keyboard event
    const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSubmit(event);
        }
    };
    
    // loading state if need add more
    const loadData = isLoading;

    // biding api response in object
    const { results } = apiResponse;

    return (
        <React.Fragment>
            <Grid container spacing={1} mt={3} alignItems={'center'} sx={{ paddingLeft: '20px', paddingRight: '15px', position: 'relative' }}>
                <TextareaAutosize
                    minRows={3}
                    maxRows={10}
                    placeholder="Search or ask anything..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    style={{
                        boxShadow: '0px 4px 4px 0px #00000040',
                        borderRadius: '10px',
                        border: '1px solid #1D85FE',
                        width: '100%',
                        padding: '10px',
                        position: 'relative',
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        textAlign: 'left',
                        height: '79px',
                    }}
                />
                <InputAdornment position="end" style={{ position: 'absolute', top: '67%', right: '20px', bottom: '10px' }}>
                    <Image
                        src={'/assests/images/icon _arrow.svg'}
                        alt={'search'}
                        width={50}
                        height={50}
                        onClick={handleSubmit}
                        style={{ cursor: 'pointer' }}
                    />
                </InputAdornment>
            </Grid>

            {
                noDataFound === 0 ? (
                    <>
                        <Typography
                            variant="h2"
                            color="#000"
                            fontSize={22}
                            component="h2"
                            textAlign={'center'}
                        >
                            {noDataFound === 0 ? 'No data found' : ''}
                        </Typography>
                    </>
                ) : (<>
                    {results?.map((item: any) => {
                        return <>{item.type == 'answer' ? <QueryAnswer data={item} /> : <Products data={item} />}</>
                    })}
                </>)
            }

            <Loaders loading={loadData} />

        </React.Fragment>
    );
};

export default SearchData