import React, { Component, PropTypes } from 'react';
import { Container, 
    Content,
    List,
    ListItem,
    Left,
    Right,
    Thumbnail,
    Body,
    Text,
    Icon } from 'native-base';

export default class ListView extends Component{
    constructor() {
        super();
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    };
    onValueChange (value) {
        this.setState({
            selected1 : value
        });
        alert("Teste");
    };

    render(){
        return(
                <Content>
                    <List>
                        <ListItem
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Thumbnail source={require('../../img/perfil.jpg') } />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem iconRight>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Icon name='ios-information-circle' style={{color: '#384850'}}/>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../img/perfil.jpg')} />
                            <Body>
                                <Text>Márcio Abrantes</Text>
                                <Text>Testando blablabla</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
                
        );
    }
}