import { Button, Chip, CircularProgress, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import '@fontsource/montserrat/300.css';

import { DefaultPage } from "../../templates/defaultpage";
import Slider from "../../components/carousel/carousel";

const Details = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();

  const [game, setGame] = useState(null);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
		    "x-rapidapi-key": "2768fdfdb3mshc3bfe71a9983794p16b2d3jsn42669ce7aa62",
      },
    };
    fetch(`https://mmo-games.p.rapidapi.com/game?id=${gameId}`, config)
      .then((response) => response.json())
      .then((game) => setGame(game));}, [gameId]);
  
  return (
    <DefaultPage>
      <Paper elevation="1">
        <Grid container sx={{ padding: 1 }}>
          {!game ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item md={12}>
                <img src={game.thumbnail} alt={game.title} />
              </Grid>
              <Grid item md={12} fontFamily="montserrat">
                <p>
                  <Typography variant="h5" fontFamily="montserrat" sx={{ margin: 1 }}>{game.title}</Typography>
                </p>
                <Grid sx={{ margin: 1 }}>
                <Chip label={game.genre} variant="outlined" fontFamily="montserrat"/>
                <Chip label={game.publisher} variant="outlined" fontFamily="montserrat" sx={{ marginLeft: 1 }}/>
                <Chip label={game.platform} variant="outlined" fontFamily="montserrat" sx={{ marginLeft: 1 }}/>
                </Grid>
                <p>
                  <Typography variant="subtitle1" fontFamily="montserrat">{game.short_description}</Typography>
                </p>
                {!!game.screenshots && <Slider images={game.screenshots}/>}
                <Divider />
              </Grid>
              <Button variant="contained" fontFamily="montserrat" onClick={() => navigate("/")}>
                VOLTAR
              </Button>
            </>
          )}
        </Grid>
      </Paper>
    </DefaultPage>
  )
  
};

export default Details;