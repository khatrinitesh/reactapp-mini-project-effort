import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ValidateForm() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagePreview, setimagePreview] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };

  const onUpload = (event) => {
    console.log(typeof event.target.files);
    const files = event.target.files[0];
    setUploadedImages([...uploadedImages, files]);
    setimagePreview(
      uploadedImages.map((image) =>
        Object.assign(image, {
          preview: URL.createObjectURL(image)
        })
      )
    );
    console.log(files);
  };

  const thumbs = imagePreview.map((image) => (
    <div key={image.name}>
      <div>
        <img alt={image.name} src={image.preview} />
      </div>
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register("testimages", {
            validate: {
              lessThan10MB: (files) => files[0]?.size < 30000 || "Max 30kb",
                acceptedFormats: (files) =>
                  ["image/jpeg", "image/png", "image/gif"].includes(
                    files[0]?.type
                  ) || "Only PNG, JPEG event GIF"
            }
          })}
          type="file"
          onChange={onUpload}
          name="testimages"
          accept="image/png, image/jpeg"
          multiple
        />
        {errors.testimages && <span>{errors.testimages.message}</span>}
        <button type="submit">Submit</button>
        {uploadedImages.map((image, i) => (
          <p key={i}>{image.name}</p>
        ))}
        <p>{uploadedImages.length}</p>
        {thumbs}
      </form>
    </div>
  );
}

export default ValidateForm;