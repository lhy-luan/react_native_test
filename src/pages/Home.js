import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }
    
    render() {
        return (
            <View>
                <View style={styles.supplyCard}>
                    <View style={styles.cardImg}>
                    </View>
                    <Image source={require('../assets/images/home_icon_apply.png')} style={styles.icon} />
                    <View style={styles.supplyText}>
                        <Text style={styles.title}>艾方装修分期</Text>
                        <Text style={styles.desc}>aifang renovation</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    supplyCard: {
        backgroundColor: '#fff',
        width: 315,
        margin: 30,
        borderRadius: 15,
    },
    cardImg: {
        backgroundColor: '#EDFCFF',
        height: 270,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    supplyText: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        color: '#121C33',
        lineHeight: 30,
    },
    desc: {
        fontSize: 12,
        color: '#121C33',
        lineHeight: 16,
    },
    icon: {
        position: 'absolute',
        right: 15,
        width: 56,
        height: 56,
        top: 242,
    }
})

