import React from "react";
import exec from "./interpreter";
import { STARTING_MESSAGE } from "./messages";
import TerminalInput from "./TerminalInput";

const Terminal: React.FC = () => {
  const [currentCommand, setCurrentCommand] = React.useState<string>("");

  const commandsContainerRef = React.useRef<HTMLDivElement>(null);
  const terminalInputRef = React.useRef<HTMLDivElement>(null);

  const outputToCLI = (output: string) => {
    if (!commandsContainerRef.current) return;

    const containerElement = document.createElement("pre");
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

  React.useEffect(() => {
    outputToCLI(STARTING_MESSAGE);
  }, []);

  return (
    <div>
      <div className="output" ref={commandsContainerRef}></div>

      <TerminalInput
        containerRef={terminalInputRef}
        executeCommand={executeCommand}
        currentCommand={currentCommand}
        setCurrentCommand={setCurrentCommand}
      />
    </div>
  );
};

export default Terminal;
