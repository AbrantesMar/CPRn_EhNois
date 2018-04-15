import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
​
export default class SpinnerExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Spinner />
                    {/*<Spinner color='red' />*/}
                </Content>
            </Container>
        );
    }
}