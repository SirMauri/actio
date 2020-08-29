/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui icons
import Mail from '@material-ui/icons/Mail';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Footer from 'components/Footer/Footer.js';
// sections for this page
import SectionLatestOffers from 'pages-sections/ecommerce/SectionLatestOffers.js';
import SectionProducts from 'pages-sections/ecommerce/SectionProducts.js';
import SectionBlog from 'pages-sections/ecommerce/SectionBlog.js';

import ecommerceHeader from 'assets/img/examples/ecommerce-header.jpg';
import face1 from 'assets/img/faces/card-profile6-square.jpg';
import face2 from 'assets/img/faces/christian.jpg';
import face3 from 'assets/img/faces/card-profile4-square.jpg';
import face4 from 'assets/img/faces/card-profile1-square.jpg';
import face5 from 'assets/img/faces/marc.jpg';
import face6 from 'assets/img/faces/kendall.jpg';
import face7 from 'assets/img/faces/card-profile5-square.jpg';
import face8 from 'assets/img/faces/card-profile2-square.jpg';

import styles from 'assets/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import SectionTeams from '../pages-sections/sections-page/SectionTeams';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

const useStyles = makeStyles(styles);

export default function EcommercePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor='white' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'white   ',
        }}
      />
      <Parallax image={require('assets/img/actio/hero.jpeg')} filter='dark' small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <div className={classes.brand}>
                <h1 className={classes.title}>actio</h1>
                <h4>buscamos activar una comunidad de corazones amantes de lo humano</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ApolloProvider client={client}>
          <SectionLatestOffers />
        </ApolloProvider>
      </div>

      <SectionTeams />

      <Footer
        theme='dark'
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce'
                    target='_blank'
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce'
                    target='_blank'
                    className={classes.block}
                  >
                    Presentation
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='#pablito' onClick={(e) => e.preventDefault()} className={classes.block}>
                    Discover
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='#pablito' onClick={(e) => e.preventDefault()} className={classes.block}>
                    Payment
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce'
                    target='_blank'
                    className={classes.block}
                  >
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{' '}
              <a
                href='https://www.creative-tim.com?ref=njsmkp-e-ecommerce'
                target='_blank'
                className={classes.aClasses}
              >
                Creative Tim
              </a>{' '}
              All Rights Reserved.
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Nosotros</h5>
            <p>
              actio es una comunidad de personas amantes de lo humano que buscan convertir la bondad y el desarrollo
              humano en hechos y en acción. Por ello, te invitamos a ser parte de nuestro proyecto, comprando una
              camiseta. Solo con esa acción, comenzaras a caminar hacia el cambio que tanto deseas y del que tanto
              hablas.
            </p>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Social Feed</h5>
            <div className={classes.socialFeed}>
              <div>
                <i className='fab fa-twitter' />
                <p>How to handle ethical disagreements with your clients.</p>
              </div>
              <div>
                <i className='fab fa-twitter' />
                <p>The tangible benefits of designing at 1x pixel density.</p>
              </div>
              <div>
                <i className='fab fa-facebook-square' />
                <p>A collection of 25 stunning sites that you can use for inspiration.</p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Instagram Feed</h5>
            <div className={classes.galleryFeed}>
              <img src={face1} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face2} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face3} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face4} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face5} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face6} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face7} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face8} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
            </div>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
}
