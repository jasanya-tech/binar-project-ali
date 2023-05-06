import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../images/blade-runner-2049.jpg'
import { useState, useEffect } from 'react'
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate()
    const [popularMovie, setPopularMovie] = useState([])

    const dateFormat = (dates) => {
        const date = new Date(dates); 
        const formattedDate = date.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });
        return formattedDate
    }

    const getPopularMovie = async () => {
        const response = await tmdbApi.getMoviesList("popular")
        const res = response.results
        res.length = 5
        if (res){
            setPopularMovie(res)
        }
    }

    useEffect(() => {
        getPopularMovie()
    }, [])

    return (
        <>
            <Box flex={4} sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
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
                    <Typography variant='h2'  color='white' fontWeight='bold' sx={{marginLeft:2}}>
                        Blade Runner: 2049
                    </Typography>
                    
                    <Typography variant='h6' color='white' sx={{marginLeft:2, textAlign:'justify'}}>
                        Ryan Gosling as Officer K, a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Harrison Ford as Rick Deckard, a former blade runner who's been missing for 30 years.
                    </Typography>

                    <Button variant='contained' color='secondary' target="_blank" href="https://youtu.be/gCcx85zbxz4" sx={{marginLeft:2, marginTop:1, width:250, height:50}}>Watch Trailer</Button>
                </Box>
            </Box>

            <Box sx={{margin:2}}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:2}}>
                    <Typography variant='h4' fontWeight='bold'>Popular Movie</Typography>
                    <Typography variant='h5' color='secondary' onClick={() => navigate('/movies')} sx={{cursor:'pointer'}}>See All Movies</Typography>
                </Box>

                <Grid sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignContent: 'center' }}>
                    {popularMovie.map((movie) => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt={ movie.title }
                                height='500'
                                image={apiConfig.originalImage(movie.poster_path)} 
                                onClick={() => navigate('/detail',{state:{id: movie.id}})}
                                sx={{cursor:'pointer'}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    { movie.title }
                                </Typography>
                                <Typography>
                                    { dateFormat(movie.release_date) }
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}      
                </Grid>
            </Box>
        </>
    )
}

export default Main