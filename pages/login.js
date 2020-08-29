/*eslint-disable*/
import { useEffect, useState } from 'react';
import router from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Favorite from '@material-ui/icons/Favorite';
import Face from '@material-ui/icons/Face';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import loginPageStyle from 'assets/jss/nextjs-material-kit-pro/pages/loginPageStyle.js';

import image from 'assets/img/bg7.jpg';

import useRequest from '../hooks/use-request';

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(null);
  const [password, setPassword] = useState('');

  const { doRequest, error } = useRequest({
    url: '/api/auth/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => router.push('/'),
  });

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
    <div>
      <Header
        absolute
        color='transparent'
        brand='action'
        // links={<HeaderLinks dropdownHoverColor='info' />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={8} md={4}>
              <Card>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <CardHeader color='primary' signup className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                    {error && (
                      <div style={{ marginBottom: '2px' }} className='alert alert-danger'>
                        {error}
                      </div>
                    )}
                  </CardHeader>
                  <CardBody signup>
                    <CustomInput
                      id='email'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (e) => setEmail(e.target.value),
                        placeholder: 'Email...',
                        type: 'email',
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id='pass'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (e) => setPassword(e.target.value),

                        placeholder: 'Password',
                        type: 'password',
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Icon className={classes.inputIconsColor}>lock_utline</Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off',
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button type='submit' simple color='primary' size='lg'>
                      Get started
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href='https://www.creative-tim.com/?ref=njsmkp-login' target='_blank' className={classes.block}>
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/presentation?ref=njsmkp-login'
                      target='_blank'
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href='http://blog.creative-tim.com/?ref=njsmkp-login' className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/license?ref=njsmkp-login'
                      target='_blank'
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '}
                <a href='https://www.creative-tim.com?ref=njsmkp-login' target='_blank'>
                  Creative Tim
                </a>{' '}
                for a better web
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
