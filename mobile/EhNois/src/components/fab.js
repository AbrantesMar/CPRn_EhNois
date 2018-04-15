import React, { Component, StyleSheet } from 'react';
import { Container, Content, Button, Icon, Fab } from 'native-base';

export default class FABComponents extends Component{
    constructor() {
        super();
        this.state = {
            active: false
        };
    }
      render() {
        return (  
            <Fab
                active={this.state.active}
                direction="up"
                style={{ backgroundColor: '#5067FF' }}
                containerStyle={{ marginLeft: 5 }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="add" />
                <Button style={{ backgroundColor: '#34A34F' }}
                    onPress={() => {
                        this.props.navigator.push({ id: 'eventcadastro' });
                    }}>
                    <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                </Button>
            </Fab>
        );
    }
}