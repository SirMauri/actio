import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import Muted from 'components/Typography/Muted.js';

import teamsStyle from 'assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js';

import bg7 from 'assets/img/bg7.jpg';
import city from 'assets/img/examples/city.jpg';
import marc from 'assets/img/faces/marc.jpg';
import christian from 'assets/img/faces/christian.jpg';
import kendall from 'assets/img/faces/kendall.jpg';
import avatar from 'assets/img/faces/avatar.jpg';
import cardProfile1 from 'assets/img/examples/card-profile1.jpg';
import cardProfile2 from 'assets/img/examples/card-profile2.jpg';
import cardProfile4 from 'assets/img/examples/card-profile4.jpg';
import cardProfile1Square from 'assets/img/faces/card-profile1-square.jpg';
import cardProfile2Square from 'assets/img/faces/card-profile2-square.jpg';
import cardProfile4Square from 'assets/img/faces/card-profile4-square.jpg';
import cardProfile6Square from 'assets/img/faces/card-profile6-square.jpg';

import Embajador from '../../components/Embajador';

// images
import rod from 'assets/img/action_embajadores/rod.jpeg';
import alex from 'assets/img/action_embajadores/alex.jpg';
import juan from 'assets/img/action_embajadores/juan.jpeg';
import analu from 'assets/img/action_embajadores/analu.jpg';
import clara from 'assets/img/action_embajadores/clara.jpg';
import elisa from 'assets/img/action_embajadores/elisa.jpg';
import rorro from 'assets/img/action_embajadores/rorro.jpg';
import jorge from 'assets/img/action_embajadores/jorge.jpeg';
import sofia from 'assets/img/action_embajadores/sofia.jpeg';
import javier from 'assets/img/action_embajadores/javier.jpg';
import idania from 'assets/img/action_embajadores/idania.jpeg';
import andrea from 'assets/img/action_embajadores/andrea.jpeg';
import chispita from 'assets/img/action_embajadores/chispita.jpeg';
import elizabeth from 'assets/img/action_embajadores/elizabeth.jpeg';
import gustavo from 'assets/img/action_embajadores/gustavo.jpg';

const useStyles = makeStyles(teamsStyle);

const embajadores = [
  {
    nombre: 'Andrea Cobos',
    description:
      'Andrea Cobos 28 años, es esposa, madre, conferencista internacional de Teología del Cuerpo y consultora familiar. Cuenta con una Maestría en Ciencias de la Familia y actualmente está cursando una especialidad en Teología del Cuerpo por el Instituto de Filadelfia. Creadora de contenido sobre el amor humano, espiritualidad y vida en su cuenta de IG @andreacobostdc. Es parte de la comunidad @amarasyoficial donde dan respuestas a la luz de la teología del cuerpo.',
    instagram: 'https://www.instagram.com/andreacobostdc/',
    image: andrea,
  },
  {
    nombre: 'Rorro Echávez',
    description:
      'Rorro es un joven optimista que busca impulsar la mejor versión de las personas y las organizaciones. Por eso es creador de contenido, director creativo, conferencista y autor de 2 libros, para ayudar a los demás a crecer como personas para así, juntos crecer como sociedad.',
    instagram: 'https://www.instagram.com/rorroechavez/',
    image: rorro,
  },
  {
    nombre: 'Padre Javier Gaxiola LC',
    description:
      'Es sacerdote católico desde diciembre del 2017. Es Director local del RC Guadalajara sur y de la sección de jóvenes del Regnum Christi. Autor de “El Último recuerdo” y “Confesiones de un millennial”. Host del podcast “sin filtro” y su propio podcast, ha trabajado y apoyado en la formación y pastoral de jóvenes varones en Alemania, Austria, Italia y México. Apasionado de todo lo humano en el plan divino.',
    instagram: 'https://www.instagram.com/padregaxiola/',
    image: javier,
  },
  {
    nombre: 'Ana Lourdes Ezquerra',
    description:
      'Ana Lourdes Ezquerra Félix, Lic en Comunicación Publicidad y Relaciones Publicas. Podcaster, Speaker y creadora de contenido de crecimiento personal.',
    instagram: 'https://www.instagram.com/analourdesef/',
    image: analu,
  },
  {
    nombre: 'Alex Vargas',
    description:
      'Alex Vargas es estudiante de economía y gestión empresarial en Roma, creador de contenido y apasionado por las relaciones humanas. Alex busca inspirar a Dios  en las personas y compartir que, con amor, grandes cosas suceden.',
    instagram: 'https://www.instagram.com/alexvardel/',
    image: alex,
  },
  {
    nombre: 'Mariángela Guerra',
    description:
      'Soy Mariángela. Cantante y compositora mexicana. Estudiante de filosofía que busca sumar su granito de arena al mundo desde el Amor y la sinceridad.',
    instagram: 'https://www.instagram.com/mariangelaguerra/',
    image: chispita,
  },
  {
    nombre: 'Clara Cuevas',
    description:
      'Soy Lic. En comunicación audiovisual,  Conferencista y creadora de contenido enfocada en promoción y análisis de la lectura. Co-creadora del podcast @el.planD. En mi cuenta de Instagram hablo de lo que más amo que es vivir el evangelio acompañada de la cotidianidad de mi vida.',
    instagram: 'https://www.instagram.com/claracuevas3/',
    image: clara,
  },
  {
    nombre: 'Elisa',
    description:
      'Tengo 21 años. Soy de Veracruz, México. Soy creadora de Contenido en Youtube e Instagram desde el 2016. Estudiante en la Licenciatura de Comunicación.  Soy una mujer dispuesta día con día a proyectar alegría e impactar de manera positiva la vida de los demás a través de sus redes sociales.',
    instagram: 'https://www.instagram.com/soyelisam/',
    image: elisa,
  },
  {
    nombre: 'Elizabeth Soto',
    description:
      'Es Pedagoga graduada de la Universidad Panamericana. Es conductora y locutora del programa formarte en valora radio, graba cápsulas de contenido formativo, educativo, crecimiento personal y espiritual para María visión. Actualmente es creadora de contenido de valor en redes sociales en plataformas como Spotify y Apple podcasts.',
    instagram: 'https://www.instagram.com/elizabethsoto6/',
    image: elizabeth,
  },
  {
    nombre: 'Idania',
    description:
      'Idania Ibarra Hernández es originaria de Cocula, Jalisco y tiene 23 años de edad. Estudia la carrera de Derecho. Es apasionada del futbol, emprendedora de un proyecto nuevo venta de articulos religiosos. Es conferencista y creadora de contenido de crecimiento personal integral y desarrollo humano.',
    instagram: 'https://www.instagram.com/idaniaibarra/',
    image: idania,
  },
  {
    nombre: 'Juan Ca',
    description:
      'Qué tal mi nombre es Juan Carlos Amezcua, soy una persona humilde y servicial, me encanta el poder aportar mi granito de arena y ayudar a los demás, estoy listo para hacer de este mundo uno mejor.',
    instagram: 'https://www.instagram.com/juancaamezcua/',
    image: juan,
  },
  {
    nombre: 'Rod. G. Puerta',
    description:
      'Rodrigo es una persona 100% convencida que todos poseemos la sabiduría necesaria para aportar positivamente a la sociedad, sin embargo la sabiduría de algunos se encuentra dormida. Rodrigo se ha preparado para convertirse en una herramienta para despertar esa sabiduría en los demás a través de la consciencia y la atención plena.',
    instagram: 'https://www.instagram.com/rodgpuerta/',
    image: rod,
  },
  {
    nombre: 'Jorge Calderón',
    description:
      'Soy Jorge Calderon, tengo 25 años. Dedicado al trabajo, familia y amigos. Además, Creador de contenido positivo, buscando ayudar y motivar a personas.',
    instagram: 'https://www.instagram.com/jorgecalderonf/',
    image: jorge,
  },
  {
    nombre: 'Sofía Carmona',
    description:
      'Sofía Carmona nació en Guadalajara y creció en la tierra de Mexicali. Tiene 20 años y actualmente es cantautora. Es apasionada de la música, las letras, y tiene como propósito contribuir de manera positiva en la sociedad. Actualmente, está preparando y su desarrollando su nuevo proyecto musical con las disqueras Warner Bros. y Universal Music México. En unos meses lanzará su primer álbum, el cual pronto tendremos oportunidad de escuchar.',
    instagram: 'https://www.instagram.com/sofiacarmona.c/',
    image: sofia,
  },
  {
    nombre: 'H. Gustavo Godínez, LC',
    description:
      'Tiene 29 años de edad y 9 de religioso. Se dedica a la pastoral juvenil y su mayor ilusión es acompañar a los jóvenes en su camino hacia Dios. Autor del libro “Hacer el amor con Amor” y creador de contenido de evangelización en redes.',
    instagram: 'https://www.instagram.com/godinezlc/',
    image: gustavo,
  },
];

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  const embajadoresGroup = embajadores.map((el, key) => (
    <Embajador
      image={el.image}
      name={el.nombre}
      description={el.description}
      causa={el.causa}
      instagram={el.instagram}
    />
  ));
  return (
    <div className='cd-section' {...rest}>
      {/* Team 1 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>{embajadoresGroup}</GridContainer>
        </div>
      </div>
    </div>
  );
}
