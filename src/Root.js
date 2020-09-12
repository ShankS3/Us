import 'react-native-gesture-handler';
import React, {Profiler} from 'react';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import App from './App';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
) {}

function Root() {
  return (
    <Provider store={store}>
      <Profiler id="us" onRender={onRenderCallback}>
        <App />
      </Profiler>
    </Provider>
  );
}

export default Root;
