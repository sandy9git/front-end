import 'braid-design-system/reset';
import { BraidLoadableProvider } from 'braid-design-system';
import { Route } from 'react-router-dom';
import React from 'react';
import loadable from 'sku/@loadable/component';

interface AppProps {
  site: string;
}

const Users = loadable(() => import('./Users/Users'));
const UserDetails = loadable(() => import('./Users/UserDetails'));

export default ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <Route path="/" exact component={Users} />
    <Route path="/user-details" exact component={UserDetails} />
  </BraidLoadableProvider>
);
