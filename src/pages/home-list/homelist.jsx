import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';

import { GameCard } from '../../components/card/card';
import { DefaultPage } from '../../templates/defaultpage';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const config = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '1d2d71b1d1mshd95b1636d349336p10c343jsn3d86a33a1e0c',
      },
    };

    fetch('https://mmo-games.p.rapidapi.com/games', config)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <DefaultPage>
      <Grid container spacing={2} fontFamily="montserrat">
        {games.length > 0 ? (
          games.map((game) => (
            <Grid sm={6} md={4} lg={3} key={game.id} item>
              <GameCard
                id={game.id}
                title={game.title}
                genre={game.genre}
                description={game.short_description}
                thumb={game.thumbnail}
              />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </DefaultPage>
  );
};

export default GameList;
