import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  loading: any;
}
const LoaderComponent: React.FC<Props> = ({ loading }) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 0.5 }} open={loading}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoaderComponent;
