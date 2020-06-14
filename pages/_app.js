/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import 'typeface-quicksand';
import '../styles/index.css';
import '../styles/highlight.css';
import Layout from '../components/shared/Layout';
import UserProvider from '../hooks/useUser';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
