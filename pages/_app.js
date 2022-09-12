import {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import withReduxStore from "../common/withReduxStore";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../lib/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import createEmotionCache from '../lib/createEmotionCache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps,reduxStore,reduxPresitor,emotionCache = clientSideEmotionCache }) => {
  // const { Component, pageProps,reduxStore,reduxPresitor,emotionCache = clientSideEmotionCache } = props;
  // console.log('pageProps',pageProps)
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return ( 
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />  
      </Head>
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={reduxPresitor}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            <ToastContainer/>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object
};

export default withReduxStore(MyApp)

// import { useStore } from '../redux/store'
// import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../lib/theme'
// import createEmotionCache from '../lib/createEmotionCache';
// import { ThemeProvider } from '@mui/material/styles';
// import Head from 'next/head';
// import { CacheProvider } from '@emotion/react';
// import PropTypes from 'prop-types';

// const clientSideEmotionCache = createEmotionCache();

// export default function App({ Component,pageProps,emotionCache = clientSideEmotionCache }) {
//   const store = useStore(pageProps.initialReduxState)
//   const persistor = persistStore(store, {}, function () {
//     persistor.persist()
//   })

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <CacheProvider value={emotionCache}>
//           <Head>
//             <meta name="viewport" content="initial-scale=1, width=device-width" />  
//           </Head>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//              <Component {...pageProps} />
//           </ThemeProvider>
//         </CacheProvider>
//       </PersistGate>
//     </Provider>

//   )
// }

// App.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };

