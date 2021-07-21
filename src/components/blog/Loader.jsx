import loader2 from "../../blog-assets/loaders/loader2.gif";

const Loader = () => {
  return <img style={style} src={loader2} alt="Loading ..." />;
};

const style = {
  width: "10%",
  maxWidth: "100%",
  textAlign: "center",
  display: "block",
  margin: "auto",
};

export default Loader;
