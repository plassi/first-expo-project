import React from 'react';
import SelectImageView from './SelectImageView'
import ShareImageView from './ShareImageView'

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  if (selectedImage !== null) {
    return (
      <ShareImageView selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    );
  }

  return (
    <SelectImageView setSelectedImage={setSelectedImage} />
  );
}
