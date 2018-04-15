import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
    Container, 
    Content, 
    Form,
    List,
    ListItem,
    StyleProvider } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

export default class MenuView extends Component {
    render(){
        return(<StyleProvider style={getTheme((this.props.themeState === 'material') ? material : undefined)}>
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <StatusBar
            hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
            backgroundColor={statusBarColor.statusBarColor}
          />
          <RouterWithRedux>
            <Scene key="root">
              <Scene key="home" component={Home} hideNavBar initial={true} />
              <Scene key="header" component={Header} />
            </Scene>
          </RouterWithRedux>
        </Drawer>
      </StyleProvider>)
    }
}