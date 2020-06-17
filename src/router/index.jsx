import React, { Component } from "react";
import appRoutes from '../router/route';
import Index from '../page/index';
import { TosConfirm } from '../page/tos'
import { Switch, Route } from "react-router-dom";

class AppRoutes extends Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={TosConfirm} />
        <Route path={appRoutes.index} component={Index} />
      </Switch>
    );
  }
}

export default AppRoutes;