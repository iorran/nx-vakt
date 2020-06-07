import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
  
import { NominationsFeatureHome } from '@vakt/nominations/feature-home';
import { BfoetFeatureHome } from '@vakt/bfoet/feature-home';

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={BfoetFeatureHome} /> 
        <Route path="/nominations" exact component={NominationsFeatureHome} /> 

        <Route path="/" component={() => <h1>Oops! What are doing ?!</h1>} /> 
    </Switch>
  );
}