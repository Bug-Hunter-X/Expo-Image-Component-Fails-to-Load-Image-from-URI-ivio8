import React from 'react';
import { Image } from 'expo-image';

const MyImage = ({ uri }) => {
  const [error, setError] = React.useState(null);

  const handleError = (e) => {
    setError(e);
    console.error('Error loading image:', e);
  };
  
  if (error) {
    return <Text>Failed to load image: {error.message}</Text>;
  }

  return (
    <Image
      source={{ uri }}
      style={{ width: 200, height: 200 }}
      onError={handleError}
    />
  );
};
export default MyImage;