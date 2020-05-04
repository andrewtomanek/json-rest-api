import * as React from "react";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Navigation from "./components/Navigation";
import routes from "./routes";

interface AppProps {
  history: History;
}

const App: React.FC<AppProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Navigation />
      {routes}
    </ConnectedRouter>
  );
};

export default App;
