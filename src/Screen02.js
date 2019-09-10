import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Import the connect from redux
import {connect} from 'react-redux';

class Screen02 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen 02</Text>
      </View>
    );
  }
}

mapStateToProps = state => {
  const {appReducer} = state.AppReducer;

  return {appReducer};
};
//Export the app using connect
export default connect(
  mapStateToProps,
  {},
)(Screen02);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
