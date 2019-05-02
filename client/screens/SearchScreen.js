import React, { Component } from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object
 */
ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };

    // You can also display the image using data:
 

    this.setState({
      avatarSource: source,
    });
  }
});

// Launch Camera:
ImagePicker.launchCamera(options, (response) => {
  // Same code as in above section!
});

// Open Image Library:
ImagePicker.launchImageLibrary(options, (response) => {
  // Same code as in above section!
});