import React from 'react';

import classNames from 'classnames';

import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/latestOffersStyle.js';

import gucci from 'assets/img/examples/gucci.jpg';
import Link from 'next/link';

const useStyles = makeStyles(styles);

export default (props) => {
  const classes = useStyles();
  const idArr = props.id.split('/');
  const id = idArr[idArr.length - 1];
  console.log(id);
  return (
    <GridItem md={4} sm={6}>
      <Card product plain>
        <CardHeader image plain>
          <Link href={`/producto/${id}`}>
            <a>
              <img src={props.image} alt='...' />
              <div className={classes.coloredShadow} style={{ backgroundImage: `"url(${props.image})"`, opacity: 1 }} />
            </a>
          </Link>
        </CardHeader>
        <CardBody className={classes.textCenter} plain>
          <h4 className={classes.cardTitle}>{props.title}</h4>
          <p className={classes.cardDescription}>{props.description}</p>
        </CardBody>
        <CardFooter plain>
          <div className={classes.priceContainer}>
            <span className={classNames(classes.price, classes.priceNew)}>$400 MX</span>
          </div>
          <div className={classNames(classes.stats, classes.mlAuto)}>
            <Tooltip id='tooltip-top' title='Saved to Wishlist' placement='top' classes={{ tooltip: classes.tooltip }}>
              <Button justIcon simple color='rose'>
                <Favorite />
              </Button>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
