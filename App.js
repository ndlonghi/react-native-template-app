import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from "./src/store";
import Loading from "./src/components/loading/index";
import RootNavigator from "./src/navigation/containers";

export default class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
          <RootNavigator/>
        </PersistGate>
      </Provider>
    );
  }
}
