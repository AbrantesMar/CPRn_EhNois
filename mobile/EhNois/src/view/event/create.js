import React, { Component } from 'react';
import { Header,
    Left,
    Button,
    Item,
    Icon,
    Body,
    Right,
    Text,
    Form,
    Container
     } from 'native-base';

import { HeaderView } from './../header';

export default class CreatEventView extends Component{
    render(){
        return(
            <Container>
                <HeaderView />
                <Item floatingLabel>
                    <Input placeholder="Descricao" />
                </Item>
                <Item floatingLabel>
                    <Input placeholder="Data Inicio" />
                </Item>
                <Item floatingLabel>
                    <Input placeholder="Data Fim" />
                </Item>
                <Button>
                    Enviar
                </Button>
            </Container>
        );
    }

}