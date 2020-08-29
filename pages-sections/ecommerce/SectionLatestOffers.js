import React from 'react';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/latestOffersStyle.js';
import Product from '../../components/Product';

// images
import godIsGood from 'assets/img/actio/God Is Good.png';
import saintBlack from 'assets/img/actio/Saint black.png';
import smallSteps from 'assets/img/actio/Small Steps.png';
import takeAction from 'assets/img/actio/Take Action.png';
import lnf from 'assets/img/actio/LNF.png';

import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const GET_PRODUCTS = gql`
  {
    products(first: 5) {
      edges {
        node {
          id
          description
          title
          totalInventory
          featuredImage {
            originalSrc
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(data.products.edges);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Productos</h2>
        <GridContainer>
          {data.products.edges.map((el, i) => (
            <Product
              key={i}
              image={el.node.featuredImage.originalSrc}
              title={el.node.title}
              price='450'
              description={el.node.description}
              totalInventory={el.node.totalInventory}
              id={el.node.id}
            />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

{
  /* <Product
            image={lnf}
            title='Love never fails'
            price='400'
            description='Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera.'
          />
          <Product
            image={godIsGood}
            title='God is good'
            price='400'
            description='Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera.'
          />
          <Product
            image={smallSteps}
            title='Small steps lead to success'
            price='400'
            description='Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera.'
          />
          <Product
            image={saintBlack}
            title='Saint'
            price='400'
            description='Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera.'
          />
          <Product
            image={takeAction}
            title='Take action'
            price='400'
            description='Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera. Descripcion de la playera.'
          /> */
}
