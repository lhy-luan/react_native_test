/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
// import Store from './src/store/index';
import { Toast } from 'antd-mobile-rn';
import { NativeRouter, Route, Link } from 'react-router-native';
import './src/lib/fetchData';
import Home from './src/pages/Home';
import fetchData from './src/lib/fetchData';


type Props = {};
export default class App extends Component < Props > {
    constructor(props) {
        super(props);
        this.state = {
            comment: 'hello'
        }
    }
    componentDidMount() {
        Toast.info('hello');
        fetchData();
    }

    componentWillUnmount() {
        this.setState({
            comment: 'bye'
        });
    }

    render() {
        return ( 
            <NativeRouter>
                <View style = { styles.container }>
                    <View style = { styles.nav }>
                        <Link to = "/"
                            underlayColor = '#f0f4f7'
                            style = { styles.navItem }>
                            <Text > Home </Text>  
                        </Link> 
                    </View>

                    <Route exact path = "/" component = { Home }/> 
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'tomato',
        borderRightColor: '#fff',
        borderRightWidth: 1,
    },
});