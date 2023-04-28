import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

interface Image {
  id: number;
  url: string;
  title: string;
}

const images: Image[] = [
  {
    id: 1,
    url: 'https://picsum.photos/id/1/300/180',
    title: 'Image 1',
  },
  {
    id: 2,
    url: 'https://picsum.photos/id/2/300/180',
    title: 'Image 2',
  },
  {
    id: 3,
    url: 'https://picsum.photos/id/3/300/180',
    title: 'Image 3',
  },
];

const CatalogViewer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {images.map((image) => (
          <GridListTile key={image.id}>
            <img src={image.url} alt={image.title} />
            <GridListTileBar title={image.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default CatalogViewer;
