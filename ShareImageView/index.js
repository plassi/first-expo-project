import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <Image
        source={{ uri: selectedImage.localUri }}
        style={styles.thumbnail}
      />
      <Button onPress={openShareDialogAsync} text="Share this photo" />
      <Button onPress={clearImagePicker} text="Clear selection" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
});

export default ShareImageView;