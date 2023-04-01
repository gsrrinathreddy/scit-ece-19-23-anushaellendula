import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://fashinza.com/textile/wp-content/uploads/2021/12/shutterstock_1902260707-1.jpg',
    title: 'Stitching Clothes',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.gannett-cdn.com/presto/2022/01/12/NCOD/ec981ea0-6244-4215-93e6-019d75e73daa-Grace-Ann_Powers_Giselle_photo_by_Jennifer_Zmuda.jpg?width=660&height=991&fit=crop&format=pjpg&auto=webp',
    title: 'Dancing',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpaFUweqJoNA5XZ6xSfAMVEYj2Q-nJiaCiQ&usqp=CAU',
    title: 'Designing Clothes',
    
  },
  {
        img: 'https://www.happysprout.com/wp-content/uploads/sites/4/2020/10/benefits-of-gardening.jpg?fit=3000%2C2000&p=1',
        title: 'Gardening',
        
      },
];