import React, { InputHTMLAttributes } from "react";
import styles from "../../styles/Terminal/TerminalInput.module.scss";

interface Props {
  setCurrentCommand: Function;
  executeCommand: Function;
  currentCommand: string;
  containerRef: React.Ref<HTMLDivElement>;
}

const TerminalInput: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = (props) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") return;

    props.setCurrentCommand("");
    props.executeCommand();
  };

  return (
    <div className={styles.inputContainer} ref={props.containerRef}>
      <div className={styles.inputPrefix}>
        <span className={styles.inputPrefix_name}>mario</span>
        <span className={styles.inputPrefix_domain}>@mariodev.vercel.app</span>
        <span className={styles.inputPrefix_route}>/terminal</span>
      </div>

      <div className={styles.inputStyleContainer}>
        <input
          {...props}
          type="text"
          className={styles.input}
          value={props.currentCommand}
          onChange={(e) => props.setCurrentCommand(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
      </div>
    </div>
  );
};

export default TerminalInput;
