'use strict';

import React, {
  Component,
} from 'react';

import {
  View,
  Navigator,
  Text
} from 'react-native';
import {Router, Route, Scene, Animations, TabBar} from 'react-native-router-flux';


import Splash from './Splash';
import Dashboard from './Dashboard';
import Snaps from './Snaps';
import Discover from './Discover';
import AddMe from './AddMe';
import Chats from './Chats';
import Stories from './Stories';

import { connect } from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
const RouterWithRedux = connect()(Router);


class RootRouter extends Component {
	constructor(props) {
    super(props);
    
    	
  }

 renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'chat') {
      return (
        <Chats
         // data = {route.data}
          navigator={navigator} />
      );
    }
    if (routeId === 'AddMe') {
      return (
        <AddMe
          navigator={navigator} />
      );
    }
         if (routeId === 'Dashboard') {
      return (
        <Dashboard
  
          navigator={navigator} />
      );
    }
    if (routeId === 'Discover') {
      return (
        <Discover
  
          navigator={navigator} />
      );
    }
    if (routeId === 'Stories') {
      return (
        <Stories
  
          navigator={navigator} />
      );
    }
    if (routeId === 'Snaps') {
      return (
        <Snaps
  
          navigator={navigator} />
      );
    }
    if (routeId === 'Splash') {
      return (
        <Splash
          {...this.props}
          navigator={navigator} />
      );
    }
    
    }
    
  render() {
    return (
      <View style={{flex:1}}>
        <Navigator
        style={{flex: 1}}
        initialRoute={{id: 'Dashboard', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
      /></View>
    );
  }
  
  



}
export default connect(state => ({
    state: state.SnapChat
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(RootRouter);