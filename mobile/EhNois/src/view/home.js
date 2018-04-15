import React, { Component } from 'react';
import { Container, 
    Content,
    Left,
    Button,
    Text,
    Body,
    Input,
    Form,
    Item
     } from 'native-base';

import HeaderView from './header';
import FABComponent from './../components/fab';

export default class HomeView extends Component{
    render(){
        return(
            <Container>
                <HeaderView />
                <Content>
                </Content>
                {/* <FABComponent navigator={navigator} /> */}
            </Container>
        );
    }
}