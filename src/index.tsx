import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import App from "./App";
import configureStore, { history } from "./store/configureStore";
import { LangProvider } from "./context/LangContext";
import GlobalStyle from "./theme/globalStyle";

const store = configureStore();
const render = () => {
  ReactDOM.render(
    <>
      <GlobalStyle />
      <LangProvider>
        <AppContainer>
          <Provider store={store}>
            <App history={history} />
          </Provider>
        </AppContainer>
      </LangProvider>
    </>,
    document.getElementById("root")
  );
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
