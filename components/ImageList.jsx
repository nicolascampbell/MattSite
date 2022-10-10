import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ overflowY: 'scroll' }} className="d-flex justify-content-center">
      <ImageList variant="masonry" cols={3} gap={8} sx={{ width: '80%', height: 'auto' }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/webp/1-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/2-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/3-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/4-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/5-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/6-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/7-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/8-webp.webp',
    title: 'Bed',
  },
  {
    img: '/webp/9-webp.webp',
    title: 'Bed',
  }
  ,
  {
    img: '/webp/10-webp.webp',
    title: 'Bed',
  }
  ,
  {
    img: '/webp/11-webp.webp',
    title: 'Bed',
  }

];
