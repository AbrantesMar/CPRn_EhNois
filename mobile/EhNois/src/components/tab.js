import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Tabs>
                        <TabOne tabLabel='One' />
                        <TabTwo tabLabel='Two' />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}