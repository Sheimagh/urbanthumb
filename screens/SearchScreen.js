import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TextSearch from '../components/TextSearch';
import Submit from '../components/Submit';
import ImagePick from '../components/ImagePicker';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

           <TextSearch />
           <Submit 
            />
            <Text>
            {"\n"}
            {"\n"}
            </Text>
            <ImagePick />
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
