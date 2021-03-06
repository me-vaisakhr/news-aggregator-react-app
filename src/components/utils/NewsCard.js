import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardActionArea, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

/**
 * NewsCard - is the component used showing the single news element.
 * @param news - is prop having details of single news element.
 */
export default function NewsCard({news}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  /**
   * handleExpandClick - handler to handle the collapse and expand operation in the news card.
   */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} square>
      <CardHeader
        avatar={
          <Avatar variant="square" aria-label="news-avatar">
            {news.author && news.author[0]||news.source && news.source.name[0]||''}
          </Avatar>
        }
        title={news.source && news.source.name||news.author}
        subheader={new Date(news.publishedAt).toDateString()+', '+new Date(news.publishedAt).toLocaleTimeString()}
      />
      <Link target="_blank" href={news.url?news.url:''} underline="none">
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={news.urlToImage||''}
                title={`Author : ${news.author}`}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {news.title||''}
                </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {news.description||''}
            {news.url && <Link color="textSecondary" target="_blank" href={news.url}>[Read]</Link>}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
