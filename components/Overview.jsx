import * as React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Unstable_Grid2 as Grid } from '@mui/material' // Grid version 2
import Image from 'next/image'
export default function ImageOverview() {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}/personal/${path}.jpg`;
  const matchesSmallDevices = useMediaQuery("(max-width:768px)");
  return (
    <Grid container xs={12} justifyContent={"center"} alignContent={'center'} spacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item) => (
        <Grid xs={11} md={7} key={item}>
          <h4>Title</h4>
          <img
            src={getLink(item)}
            srcSet={getLink(item)}
            alt={item.title}
            width={"100%"}
            height={"auto"}
            loading="lazy"
          />
          <p>description</p>
        </Grid>
      ))}
    </Grid>
  );
}

const itemData = [
  {
    img: "/webp/1-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/2-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/3-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/4-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/5-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/6-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/7-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/8-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/9-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/10-webp.webp",
    title: "Bed",
  },
  {
    img: "/webp/11-webp.webp",
    title: "Bed",
  },
];
