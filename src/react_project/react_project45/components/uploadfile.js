import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={URL.createObjectURL(image)} />}
    </div>
  );
}

export default ImageUploader;
