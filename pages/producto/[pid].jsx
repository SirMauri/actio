import router from 'next/router';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ProductPage from '../../components/productPage';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

export default ({ pid }) => {
  console.log(pid);
  return (
    <ApolloProvider client={client}>
      <ProductPage id={pid} />
    </ApolloProvider>
  );
};

export function getServerSideProps(ctx) {
  const pid = ctx.query.pid;
  return {
    props: {
      pid,
    },
  };
}
