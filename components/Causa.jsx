import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
// core components
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';

import office2 from 'assets/img/examples/office2.jpg';

import sectionPillsStyle from 'assets/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js';

const useStyles = makeStyles(sectionPillsStyle);

export default function Causa({ name, description, image }) {
  const classes = useStyles();

  return (
    <GridItem xs={12} sm={6} md={6}>
      <Card raised background style={{ backgroundImage: 'url(' + image + ')' }}>
        <CardBody background>
          <h6 className={classes.category}>Causa</h6>
          {/* <a href='#pablo'> */}
          <h3 className={classes.cardTitle}>{name}</h3>
          {/* </a> */}
          <p className={classes.category}>{description}</p>
          {/* <Button round href='#pablo' color='danger'>
            <FormatAlignLeft className={classes.icons} /> Leer más
          </Button> */}
        </CardBody>
      </Card>
    </GridItem>
  );
}
