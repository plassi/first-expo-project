import React from 'react';
import { Image, Platform, Text, View } from 'react-native';
import logo from '../assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import uploadToAnonymousFilesAsync from 'anonymous-files';
import Button from '../components/Button'

const SelectImageView = ({ setSelectedImage }) => {

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image source={logo} style={{
        width: 305,
        height: 150,
        marginBottom: 10
      }} />

      <Text style={{
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15
      }}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <Button onPress={openImagePickerAsync} text="Pick a photo" />
    </View>
  )
};

export default SelectImageView;