import React, { Component } from 'react'
import {Switch} from 'antd';
import { Route } from 'react-router-dom';
import Home from "../../../page/home"
import My from "../../../page/my"
import Upload from "../../../page/upload"

export default class index extends Component {
  render() {
    return (
          <div>
            {/* <Home /> */}
             <Switch>
             <Route path="/home" Component={Home}></Route>
             <Route path="/my" Component={My}></Route>
             <Route path="/upload" Component={Upload}></Route>
           </Switch>
          </div>


    )
  }
}
