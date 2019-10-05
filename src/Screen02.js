import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import {ListItem, Icon, SearchBar} from 'react-native-elements';
import axios from 'axios';

import {addMovie} from '../actions/AppActions';

import {apiKey} from '../apiKey';

//Import the connect from redux
import {connect} from 'react-redux';

class Screen02 extends Component {
  constructor(props) {
    super(props);

    this.state = {search: '', list: []};
  }

  updateSearch(search) {
    this.setState({search: search});

    if (search.length > 3) {
      axios
        .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
        .then(response => {
          if (response.data.Search) {
            let list = response.data.Search;
            this.setState({list});
          }
        });
    }
  }

  renderItem = ({item}) => (
    <ListItem
      title={item.Title}
      subtitle={'Year: ' + item.Year}
      leftAvatar={{
        source: {
          uri: item.Poster == 'N/A' ? null : item.Poster,
        },
        size: 'large',
        rounded: false,
      }}
      bottomDivider={true}
      onPress={() =>
        Alert.alert(
          'Add movie',
          `Would you like to add ${item.Title} to yout watch list? `,
          [
            {
              text: 'Yes',
              onPress: () => this.props.addMovie(item),
              style: 'cancel',
            },
            {text: 'No', onPress: () => false, style: 'cancel'},
          ],
        )
      }
    />
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="I want to watch..."
          onChangeText={search => this.updateSearch(search)}
          value={this.state.search}
          inputContainerStyle={{backgroundColor: 'white', borderWidth: 1}}
          containerStyle={{backgroundColor: '#010101'}}
          inputStyle={{color: '#010101'}}
        />

        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  const {appReducer} = state.AppReducer;

  return {appReducer};
};

export default connect(
  mapStateToProps,
  {addMovie}, //<----
)(Screen02);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
