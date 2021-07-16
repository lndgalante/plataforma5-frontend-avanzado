import '../styles/globals.css';
import { ThemeContextProvider } from '../context/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
