import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
const myName = 'Tamara'

return(
    <View>
      <Text style={styles.textStyle}> Getting started with React Native! </Text>
      <Text style={styles.subHeader}> My name is {myName}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
textStyle: {
fontSize: 45
},
subHeaderStyle: {
  fontSize: 20
}

});

export default ComponentsScreen;
