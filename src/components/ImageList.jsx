import ImageBox from "./ImageBox";

function ImageList({ imageArray }) {
  return (
    <div className="section is-flex is-flex-wrap-wrap">
      {imageArray.map((image, index) => {
        return <ImageBox image={image} key={index} />;
      })}
    </div>
  );
}

export default ImageList;
