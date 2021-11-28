import * as React from 'react';
import { Card ,CardActionArea ,Typography, CardMedia , CardContent,} from '@mui/material';
import '@fontsource/montserrat/300.css';




export function NewsCard({ article_url, title, description, thumb }) {
    function toRedirect() {
      window.open(`${article_url}`,"_blank" );
  }  

    return (
    <Card>
      <CardActionArea onClick={() => toRedirect()}>
          <CardMedia
        component="img"
        height="500"
        image={thumb}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold" fontFamily="montserrat">
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" fontFamily="montserrat">
        {description}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}