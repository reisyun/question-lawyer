import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '@/styles/theme';
import global from '@/styles/global';
import { routes } from '@/libs/routes';

import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Sans KR regular',
  },
  palette: {
    primary: {
      main: '#273C75',
    },
  },
});

function App() {
  const route = routes.map(({ path, component, exact }) => (
    <Route key={path} path={path} component={component} exact={exact} />
  ));

  return (
    <RecoilRoot>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Router>
            <Switch>{route}</Switch>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </RecoilRoot>
  );
}

export default App;
