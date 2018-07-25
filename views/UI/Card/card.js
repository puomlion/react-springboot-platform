import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    maxWidth: 510,
    margin : '20px',
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const SimpleMediaCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card key = {props.key} className={classes.card}>
        {props.element.image ? <CardMedia
          className={classes.media}
          image= {props.element.image}
          title="Contemplative Reptile"
        /> : null}
        <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            {props.element.question}
          </Typography>
          <Typography component="p">
            {props.element.answers}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => console.log('hey')}  aria-label="Delete">
              <DeleteIcon />
          </IconButton>
          <Button size="small" color="primary">
              Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);