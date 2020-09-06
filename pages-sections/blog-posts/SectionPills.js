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
    description: 'Atención integral a migrantes y refugiados en la Zona Metropolitana de Guadalajara.',
  },
  {
    name: 'JUANACATLÁN',
    description: 'Rescatan y brindan alimento a las personas en situación de carencia alimentaria.',
  },
  {
    name: 'CENTRO INTEGRAL DE REHABILITACIÓN INFANTIL',
    description: 'Mejorar la calidad de vida de las personas con parálisis cerebral y sus famiilas.',
  },
  {
    name: 'MonuMental ClubHouse',
    description: 'recuperación de personas que viven con una enfermedad mental.',
  },
  {
    name: 'Soñar Despierto',
    description:
      'Asociación de ayuda a niños con situaciones familiares irregulares, por medio de programas de voluntariado.',
  },
  {
    name: 'La Cana',
    description: 'Es un proyecto social que busca crear oportunidades de trabajo para mujeres en prisión.',
  },
  {
    name: 'Unión por los niños',
    description:
      'Impulsan el desarrollo integral y de manera sostenible de niños, niñas y adolescentes en situación de vulnerabilidad',
  },
];

let causasElements = Causas.map((el, key) => <Causa name={el.name} description={el.description} />);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <h4>
            Gracias por tomarte el tiempo de conocer las causas que ayudamos. Gracias por ser parte del motor de acción.
            Gracias por ayudarnos a darles visibilidad a estos proyectos, gracias por querer generar responsabilidad
            social, y gracias por seguir impulsando el cambio positivo y ayudarnos a llevar a otros a la acción.
          </h4>
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>{causasElements}</GridContainer>
    </div>
  );
}
