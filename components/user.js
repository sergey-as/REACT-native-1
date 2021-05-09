import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text, Button, TouchableOpacity, FlatList} from 'react-native';

const User = ({item}) => {
    return <View style={[styles.box, styles.item]}>
        {/*// 48:00*/}
        <Image
            style={styles.tinyLogo}
            source={require('../img/deadpool.jpg')}
        />
        <Image
            style={styles.tinyLogo}
            source={require('../img/Goofy.png')}
        />
        <Image
            style={styles.tinyLogo}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Text>{item.name} -- {item.age}</Text>
        <Button
            onPress={() => console.log('press')}
            title={'some button'}
            // color="#841584"
            // accessibilityLabel="Learn more about this purple button"
        />
    </View>;
};

export default User;

const styles = StyleSheet.create({
    box: {
        height: 200,
        width: '100%',
        marginBottom: 10,
    },
    item: {
        backgroundColor: 'silver',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
    },
});
