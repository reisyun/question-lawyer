import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '@/styles/theme';
import global from '@/styles/global';
import { routes } from '@/libs/routes';

function App() {
  const route = routes.map(({ path, component, exact }) => (
    <Route key={path} path={path} component={component} exact={exact} />
  ));

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Router>
          <Switch>{route}</Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
