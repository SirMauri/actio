/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
import Footer from 'components/Footer/Footer.js';

import aboutUsStyle from 'assets/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js';
import SectionTeams from '../pages-sections/sections-page/SectionTeams';

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand='Actio'
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'white',
        }}
      />
      <Parallax image={require('assets/img/actio/emb.png')} small>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
            ></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionTeams />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://store.actiomx.com' className={classes.block} target='_blank'>
                    Tienda
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , Hecho con <Favorite className={classes.icon} /> por{' '}
              <a href='https://twitter.com/0xsirMauri' target='_blank'>
                sirMauri
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}
