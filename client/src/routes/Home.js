import homepagevideo from "../video/Home Search 365.mp4";

const Home = () => {
  return <h2><video src={homepagevideo} width="1200" height="600" controls="controls" autoPlay="true" /></h2>;
};

export default Home;
