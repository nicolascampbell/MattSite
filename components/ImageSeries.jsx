import * as React from "react";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Unstable_Grid2 as Grid, Typography } from '@mui/material' // Grid version 2
export function ImageSeries({ title, description }) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}/personal/${path}.jpg`;
  const matchesSmallDevices = useMediaQuery("(max-width:768px)");
  return (
    <Grid container xs={12} justifyContent={"center"} alignContent={'center'} spacing={3}>
      <Grid xs={12} md={7} className={"text-center"}>
        <h1 >
          {title}
        </h1>
        <p>
          {description}
        </p>
      </Grid>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item) => (
        <Grid xs={11} md={7} key={item}>
          <img
            src={getLink(item)}
            srcSet={getLink(item)}
            alt={item.title}
            width={"100%"}
            height={"auto"}
            loading="lazy"
          />
        </Grid>
      ))}
    </Grid>
  );
}

