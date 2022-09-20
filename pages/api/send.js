import { useState } from 'react';
import { useS3Upload } from 'next-s3-upload';

export default function Send() {
  let [imageUrl, setImageUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  let handleFileChange = async file => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };
  return(
    <>
    </>
  )
}