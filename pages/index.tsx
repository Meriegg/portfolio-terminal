import React from "react";
import Terminal from "../Components/Terminal/Terminal";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (window.innerWidth > 550) return;

    router.push("/notSupported");
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <Terminal />
    </div>
  );
};

export default Home;
