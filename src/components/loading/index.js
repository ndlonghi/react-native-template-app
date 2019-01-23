import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View
} from 'react-native';

function Loading(props) {

  return (
    <View
      style={styles.container}
    >
      <Image
        source={require('../../assets/imgs/logo.png')}
        style={styles.logo}
      />
      <ActivityIndicator/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {},
  logo: {}
});

export default Loading;