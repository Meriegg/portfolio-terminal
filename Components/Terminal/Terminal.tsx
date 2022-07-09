import React from "react";
import exec from "./interpreter";
import { STARTING_MESSAGE } from "./messages";
import TerminalInput from "./TerminalInput";

const Terminal: React.FC = () => {
  const [currentCommand, setCurrentCommand] = React.useState<string>("");
  // const [isLoading, setLoading] = React.useState<boolean>(true);

  const commandsContainerRef = React.useRef<HTMLDivElement>(null);
  const terminalInputRef = React.useRef<HTMLDivElement>(null);

  const outputToCLI = (output: string) => {
    if (!commandsContainerRef.current) return;

    const containerElement = document.createElement("pre");
    containerElement.classList.add("CLI_OUTPUT");
    containerElement.innerHTML = output;

    commandsContainerRef.current?.append(containerElement);
  };

  const executeCommand = () => {
    const clonedDomTerminalInput = terminalInputRef.current?.cloneNode(true);
    commandsContainerRef.current?.appendChild(
      clonedDomTerminalInput || document.createElement("div")
    );

    outputToCLI(exec(currentCommand));
  };

  // const loadInfo = () => {
  //   let loaderArray: string[] = [];
  //   for (let i = 0; i < 30; i++) {
  //     loaderArray.push(".");
  //   }

  //   for (let j = 0; j < loaderArray.length; j++) {
  //     loaderArray[j] = "|";
  //   }

  //   setLoading(false);
  // };

  React.useEffect(() => {
    outputToCLI(STARTING_MESSAGE);
  }, []);

  return (
    <div>
      <div className="output" ref={commandsContainerRef}></div>

      <TerminalInput
        containerref={terminalInputRef}
        executecommand={executeCommand}
        currentcommand={currentCommand}
        setcurrentcommand={setCurrentCommand}
      />
    </div>
  );
};

export default Terminal;
