import "./ImageFrame.scss";

const ImageFrame = ({src,name}) => {
  return (
    <div className="landing-image">
      <img
          src={src}
          alt={name}
        />
    </div>
  );
};

export default ImageFrame;
