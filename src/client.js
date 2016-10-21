/* global document */
/* eslint global-require: "off" */

import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Root from './Root';

const root = document.getElementById('app');
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root
);

// No I don't understand what happens under the hood but it works :)
if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      root
    );
  });
}
