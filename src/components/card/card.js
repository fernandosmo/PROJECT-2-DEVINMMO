import * as React from 'react';
import { Card ,CardActionArea ,Typography, CardMedia , CardContent } from '@mui/material';
import { useNavigate } from 'react-router';
import '@fontsource/montserrat/300.css';

export function GameCard({ id, title, genre, description, thumb }) {
    const navigate = useNavigate();
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`${id}`)}>
          <CardMedia
        component="img"
        height="140"
        image={thumb}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold" fontFamily="montserrat">
          {title}
        </Typography>
        <Typography gutterBottom variant="p" component="div" fontSize="11px" fontWeight="bold" fontFamily="montserrat">
          {genre}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily="montserrat">
        {description}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}