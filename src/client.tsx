import React from 'react';
import { hydrate } from 'react-dom';

import App from './App/App';
import { ClientContext } from './types';
import { BrowserRouter } from 'react-router-dom';

export default ({ site }: ClientContext) => {
  hydrate(
    <BrowserRouter>
      <App site={site} />
    </BrowserRouter>,
    document.getElementById('app'),
  );
};
