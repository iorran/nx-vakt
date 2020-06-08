import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const BfoetFeatureHome = lazy(() => import('@vakt/bfoet/feature-home').then(({ BfoetFeatureHome }) => ({ default: BfoetFeatureHome })));
const NominationsFeatureHome = lazy(() => import('@vakt/nominations/feature-home').then(({ NominationsFeatureHome }) => ({ default: NominationsFeatureHome })));

/* eslint-disable-next-line */
export interface SharedUtilRoutingProps {} 

export const SharedUtilRouting = (props: SharedUtilRoutingProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>  
      <Switch> 
        <Route path="/" exact component={BfoetFeatureHome} />
        <Route path="/nominations" exact component={NominationsFeatureHome} />
        
        <Route path="/" component={() => <h1>Oooops! 404</h1>} />
      </Switch>
    </Suspense>
  );
};

export default SharedUtilRouting;
