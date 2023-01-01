import React, {useRef } from "react";
import Webcam from "react-webcam";
 
const videoConstraints = {
  width: 540,
  facingMode: "environment"
};
 
const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
 
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);
 
  const onUserMedia = (e) => {
    console.log(e);
  };
 
  return (
    <>
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />

      <br/>
      <button onClick={capturePhoto}>Capture</button>
      <br/>
      <br/>
      
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
      <button onClick={() => setUrl(null)}>Refresh</button>
    </>
  );
};
 
export default Camera;