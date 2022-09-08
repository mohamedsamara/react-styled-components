import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import Routes from 'routes';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/global';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);
