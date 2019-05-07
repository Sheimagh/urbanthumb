import React from 'react';
import { SearchBar } from 'react-native-elements';
import Submit from './Submit';

export default class TextSearch extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <SearchBar
          placeholder="Type your plant here!"
          onChangeText={this.search}
          value={search}
        />
    );
  }
}