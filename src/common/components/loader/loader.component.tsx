import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "30px",
  marginBottom: "30px"
};

const Loader = (): JSX.Element => {
  return (
    <BeatLoader
      color={"#007DBC"}
      loading={true}
      cssOverride={override}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loader;