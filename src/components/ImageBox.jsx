function ImageBox({ image }) {
  return (
    <div>
      <img className="m-2" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageBox;
