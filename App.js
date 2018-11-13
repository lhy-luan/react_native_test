/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    // BVLinearGradient
} from 'react-native';
import './src/store/index';
import { Toast } from 'antd-mobile-rn';
import { NativeRouter, Route, Link } from 'react-router-native';
import './src/lib/fetchData';
import Home from './src/pages/Home';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from './src/store/actions';


type Props = {};
export default class App extends Component < Props > {
    constructor(props) {
        super(props);
        this.state = {
            comment: 'hello'
        }
    }
    componentDidMount() {
        Toast.info('hello hi11');
        // fetchData();
        Store.dispatch(addTodo('ceshis'));
        Store.dispatch(toggleTodo(1));
        Store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
        // alert(JSON.stringify(Store.getState()));
    }

    componentWillUnmount() {
        this.setState({
            comment: 'bye'
        });
    }

    render() {
        return (
            <NativeRouter>
                {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
                    <View style={ styles.container }>
                        <Route exact path="/" component={ Home }/> 
                    </View>
                {/* </LinearGradient> */}
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#915CFA',
        flex: 1,
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