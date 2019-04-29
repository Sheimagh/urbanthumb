import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Text
} from 'react-native';


export default class SearchScreen extends Component {
  render() {
    return (
      <View>
        <Text>Search Screen Placeholder</Text>
      </View>
    );
  }
}

// import t from '../node_modules/tcomb-form-native';

// const Form = t.form.Form;

// const User = t.struct({
//   email: t.String,
//   username: t.String,
//   password: t.Stri,
//   terms: t.Boolean
// });

// export default class SearchScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Form type={User} /> {/* Notice the addition of the Form component */}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
})

  



