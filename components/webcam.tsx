/* React */
import React, { useEffect } from "react";
/* React Camera */
import Webcam from "react-webcam";
/* Material UI */
/* Tensorflow BodyPix */

const videoConstraints = {
  width: 375,
  height: 667,
  facingMode: "user",
};

const Camera = () => {
  // const classes = useStyles();
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [model, setModel] = React.useState();

  React.useEffect(() => {
    bodyPix.load().then((net) => {
      setModel(net);
    });
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWidth(width);
    setHeight(height);
  });

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("imageSrc", imageSrc);
  }, [webcamRef]);

  const estimate = () => {
    const webcam = document.getElementById("webcam");
    console.log("## webcam", webcam);
    model.segmentPerson(webcam).then(
      (segmentation) => {
        console.log("## segmentation", segmentation);
      },
      [model]
    );
  };
  // ここに注目
  //const estimate = React.useCallback(() => {
  //  const webcam = document.getElementById("webcam");
  //  model.segmentPerson(webcam).then(
  //    (segmentation) => {
  //      console.log(segmentation);
  //    },
  //    [model]
  //  );
  //});
  return (
    <>
      <Webcam
        id="webcam"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      {/* <div className={classes.buttonStyle}> */}
        <But color="primary" onClick={estimate}>
          <PhotoCameraIcon />
        </But>
      </div>
    </>
  );
};
export default Camera;
