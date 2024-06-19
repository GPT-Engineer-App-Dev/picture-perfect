import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Text } from '@chakra-ui/react';

const PhotoUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      border="2px dashed"
      borderColor={isDragActive ? 'blue.500' : 'gray.300'}
      p={4}
      textAlign="center"
      cursor="pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>Drop the files here ...</Text>
      ) : (
        <Text>Drag 'n' drop some files here, or click to select files</Text>
      )}
      <Button mt={4} colorScheme="blue">
        Upload
      </Button>
    </Box>
  );
};

export default PhotoUpload;