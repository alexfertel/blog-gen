/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import 'typeface-quicksand';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
