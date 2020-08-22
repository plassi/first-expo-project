import React from 'react';
import { Image, View } from 'react-native';
import * as Sharing from 'expo-sharing';
import Button from '../components/Button'

export const ShareImageView = ({ selectedImage, setSelectedImage }) => {
  const clearImagePicker = () => {
    setSelectedImage(null)
  }

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image
        source={{ uri: selectedImage.localUri }}
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain"
        }}
      />
      <Button onPress={openShareDialogAsync} text="Share this photo" />
      <Button onPress={clearImagePicker} text="Clear selection" />
    </View>
  )
};

export default ShareImageView;