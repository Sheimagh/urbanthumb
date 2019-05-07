import React from 'react';
import { Image, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class ImagePick extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={this.renderPermissions}>
        <Button
          title="Upload Photo"
          onPress={this._pickImage}
          icon= {
            <Icon
          name="add"
          size={50}
          color="white"
          />
          }
          
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    renderPermissions = async () => {
      const image = this.state.selected
      
      if (image == null) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
      if (status !== 'granted') {
        throw new Error('Denied CAMERA_ROLL permissions!');
        }
      }
    }

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}