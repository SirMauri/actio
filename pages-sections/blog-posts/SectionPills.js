import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';

import office2 from 'assets/img/examples/office2.jpg';
import blog8 from 'assets/img/examples/blog8.jpg';
import cardProject6 from 'assets/img/examples/card-project6.jpg';

import sectionPillsStyle from 'assets/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js';
import Causa from '../../components/Causa';

const useStyles = makeStyles(sectionPillsStyle);

const Causas = [
  {
    name: 'FM4 Paso Libre',
  },
  {
    name: 'JUANACATLÁN',
  },
  {
    name: 'CENTRO INTEGRAL DE REHABILITACIÓN INFANTIL',
  },
  {
    name: 'MonuMental ClubHouse',
  },
  {
    name: 'Soñar Despierto',
  },
  {
    name: 'La Cana',
  },
  {
    name: 'Unión por los niños',
  },
];

let causasElements = Causas.map((el, key) => <Causa name={el.name} />);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <h4>
            Gracias por tomarte el tiempo de revisar las causas que ayudamos. Gracias por ser parte del motor de acción.
            Gracias por ayudarnos a darles visibilidad a estas causas, gracias por querer generar responsabilidad
            social, y gracias por seguir impulsando el cambio positivo y ayudarnos a llevar a otros a la acción.
          </h4>
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>{causasElements}</GridContainer>
    </div>
  );
}
