import { Box, Button, Typography } from '@mui/material'
import { Grade } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'; 
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import CircularProgress from '@mui/material/CircularProgress';

const Detail = () => {
    const location = useLocation();
    const id = location.state ? location.state.id : null;
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const getDetail = async () => { 
        try {
            const response = await tmdbApi.detail("movie", id);
            setDetail(response);
            //sleep 1seconds
            setTimeout(() => {
                setLoading(false);
            }
            , 1000)
        } catch (error) {
            console.error("Error fetching detail:", error);
        }
    }

    useEffect(() => {
        getDetail()
    }) 

    return (
        <>
            {loading && (
                <CircularProgress
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-20px',
                    marginLeft: '-20px',
                    zIndex: 1,
                    }}
                    size={40}
                />
            )}

            <Box sx={{
                backgroundImage: `${
                !loading
                    ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${apiConfig.originalImage(detail.backdrop_path)})`
                    : ''
                }`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                opacity: loading ? 0 : 1,
                transition: 'opacity 0.5s ease',
            }}>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '50%',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap:2,
                }}>
                    {!loading && (
                        <>
                            <Typography variant='h2'  color='white' fontWeight='bold' sx={{marginLeft:2}}>
                                { detail.title }
                            </Typography>

                            <Typography variant='h5' color='white' sx={{marginLeft:2}}>
                                {detail.genres ? detail.genres.map(genre => genre.name).join(", ") : 'No genres found'}
                            </Typography>

                            <Typography variant='h6' color='white' sx={{marginLeft:2, textAlign:'justify'}}>
                                {detail.overview ? detail.overview : "No overview available"}
                            </Typography>

                            <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                                <Grade color='secondary' sx={{marginLeft:2}}/>
                                <Typography variant='h6' color='white'>{detail?.vote_average ? detail.vote_average.toFixed(1) : 'N/A'}/10</Typography>
                            </Box>

                            <Button variant='contained' color='secondary' sx={{marginLeft:2, marginTop:1, width:250, height:50}}>Watch Trailer</Button>
                        </>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Detail