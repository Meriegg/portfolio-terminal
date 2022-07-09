import type { NextPage } from "next";

const NotSupported: NextPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>This device is not supported!</h1>
      <div>
        You should have a device with a screen width of more than 550px or more
        than 5.7 inches. Your device should also have a keyboard. You can
        contact me on my{" "}
        <a href="https://mariodev.vercel.app">official website.</a> Thank you.
      </div>
    </div>
  );
};

export default NotSupported;
