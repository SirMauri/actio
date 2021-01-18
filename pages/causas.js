/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import SectionPills from 'pages-sections/blog-posts/SectionPills.js';
import blogPostsPageStyle from 'assets/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle.js';

const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      />
      <Parallax image={require('assets/img/actio/causas.png')} filter='dark' small>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>Descubre nuestras causas.</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionPills />
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
