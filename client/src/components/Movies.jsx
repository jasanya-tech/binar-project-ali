import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import { useNavigate } from 'react-router-dom'

const Movies = () => {
    const navigate = useNavigate()
    
    const [popularMovie, setPopularMovie] = useState([])
    
    const getPopularMovie = async () => {
        const response = await tmdbApi.getMoviesList("popular")
        const res = response.results
        if (res) {
            setPopularMovie(res)
        }
    }
    
    const dateFormat = (dates) => {
        const date = new Date(dates); 
        const formattedDate = date.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });
        return formattedDate
    }

    useEffect(() => {
        getPopularMovie()
    }, [])

    return (
        <Box flex={4} p={4} sx={{ display: 'grid', paddingTop: 10, gap: 5, gridTemplateColumns: 'repeat(5, 1fr)' }}>
  {popularMovie.map((movie) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="500"
        image={apiConfig.originalImage(movie.poster_path)}
        onClick={() => navigate('/detail', { state: { id: movie.id } })}
        sx={{ cursor: 'pointer' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {movie.title}
        </Typography>
        <Typography>{dateFormat(movie.release_date)}</Typography>
      </CardContent>
    </Card>
  ))}
</Box>

    )
}

export default Movies