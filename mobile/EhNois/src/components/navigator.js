import React, { Component } from 'react';
import { Navigator } from 'react-native';

import HomeView from './../view/home';
import CreatEventView from './../view/event/create';

export default class NavigatorComponent extends Component {
    renderScene(route, navigator){
        console.log("teste " + route.id);
        switch(route.id){
            case 'home':
                    console.log("home " + route.id);
                    return(<HomeView navigator={navigator} />);
            case 'eventcadastro':
                    console.log("eventcadastro" + route.id);
                    return(<CreatEventView navigator={navigator} />);
            case 'user':
                    console.log("user " + route.id);
                    return <UserView navigator={navigator} />;
            case 'usercadastro':
                    console.log("usercadastro " + route.id);
                    return <CriarUsuarioView navigator={navigator} />;
            case 'pessoa':
            case 'pessoacadastro':

            default:
                console.log("default" + route.id);
                return <CriarUsuarioView navigator={navigator} />
        }
        
    };
    render(){
        return(
            <Navigator
                initialRoute={{ id: 'home' }}
                renderScene={ this.renderScene }
                />
        )
    };
}