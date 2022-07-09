import React from "react";
import exec from "./interpreter";
import TerminalInput from "./TerminalInput";

const Terminal: React.FC = () => {
  const [terminalLines, setTerminalLines] = React.useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = React.useState<string>("");

  const commandsContainerRef = React.useRef<HTMLDivElement>(null);
  const terminalInputRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let tempTerminalLines = [...terminalLines];
    terminalLines.push("Copyright 2022 Mariodev");

    setTerminalLines(tempTerminalLines);

    tempTerminalLines = [];
  }, []);

  const executeCommand = () => {
    let tempTerminalLines = [...terminalLines];
    tempTerminalLines.push(exec(currentCommand));

    const clonedDomTerminalInput = terminalInputRef.current?.cloneNode(true);
    commandsContainerRef.current?.appendChild(
      clonedDomTerminalInput || document.createElement("div")
    );

    setTerminalLines(tempTerminalLines);
  };

  return (
    <div>
      <div className="commands" ref={commandsContainerRef}>
        {terminalLines.map((line, lineIndex) => (
          <p key={lineIndex}>{line}</p>
        ))}
      </div>

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
