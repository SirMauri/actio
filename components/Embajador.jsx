import { makeStyles } from '@material-ui/core/styles';

import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import Muted from 'components/Typography/Muted.js';

import cardProfile1Square from 'assets/img/faces/card-profile1-square.jpg';
import teamsStyle from 'assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js';
import Link from 'next/link';

const useStyles = makeStyles(teamsStyle);

export default ({ name, description, causa, instagram, image }) => {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={4} md={4}>
      <Card profile>
        <CardAvatar profile>
          <img src={image} alt={name} />
        </CardAvatar>
        <CardBody>
          <h4 className={classes.cardTitle}>{name}</h4>
          <p className={classes.description}>{description}</p>

          <p className={classes.description}>
            <strong>Causa: {causa}</strong>
          </p>
        </CardBody>
        <CardFooter profile className={classes.justifyContent}>
          <a target='_blank' href={instagram}>
            <Button justIcon round color='instagram'>
              <i className='fab fa-instagram' />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
