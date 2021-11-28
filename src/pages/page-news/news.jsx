import { CircularProgress , Grid , Paper } from "@mui/material";
import React , { useEffect , useState } from "react";

import { DefaultPage } from "../../templates/defaultpage";
import { NewsCard } from "../../components/card/newscard";

const News = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
		    "x-rapidapi-key": "2768fdfdb3mshc3bfe71a9983794p16b2d3jsn42669ce7aa62",
      },
    };
    fetch("https://mmo-games.p.rapidapi.com/latestnews", config)
      .then((response) => response.json())
      .then((data) => setNews(data));}, []);
  
  return (
    <DefaultPage>
      <Paper elevation="1">
        <Grid container spacing={2} fontFamily="montserrat" sx={{marginTop:"2px"}}>
        {news.length > 0 ? (
          news.map((data) => (
            <Grid sm={12} md={12} lg={12} key={data.id} item>
              <NewsCard
                article_url={data.article_url}
                title={data.title}
                description={data.short_description}
                thumb={data.main_image}
              />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
        </Grid>
      </Paper>
    </DefaultPage>
        )
      };

export default News;