import Terminal from "../Components/Terminal/Terminal";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div style={{ marginLeft: "40px", marginTop: "40px" }}>
      <Terminal />
    </div>
  );
};

export default Home;
