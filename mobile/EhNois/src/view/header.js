import React, { Component } from 'react';
import { Header,
    Left,
    Button,
    Icon,
    Body,
    Right,
    Text
     } from 'native-base';

import CreatEventView from './event/create';

export default class HeaderView extends Component{
    addEvent(){
        console.log('chegou aqui');
        return(<CreatEventView />);
    };
    render(){
        return(
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="menu" size={20} color='red' />
                    </Button>
                </Left>
                <Body>
                    <Text>EhNois</Text>
                </Body>
                <Right>
                    <Button 
                        onPress={() => this.addEvent() }
                        transparent>
                        <Icon name="add" size={20} color='red' />
                    </Button>
                </Right>
            </Header>
        );
    }
}