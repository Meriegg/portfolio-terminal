import * as messages from "./messages";

export const starterCredentials = () => messages.STARTING_MESSAGE;

export const contact = (command: string) => {
  const contactLinks = {
    instagram: "https://instagram.com/meriofrog",
    github: "https://github.com/meriegg",
    gmail: "https://gmail.com",
  };

  switch (true || false) {
    case /--[^-]*/i.test(command):
      // @ts-ignore
      const contactLink = contactLinks[command.split("--")[1]];

      if (!contactLink) {
        return messages.showError(
          `I cannot be contacted on \`${command.split("--")[1]}\`.`
        );
      }

      window.location.href = contactLink;
      return "";

    case !/--[^-]*/i.test(command):
      return messages.CONTACT_INFO;

    default:
      return messages.showError("Command Typed Incorrectly.");
  }
};

export const exit = () => {
  window.location.href = "https://mariodev.vercel.app";

  return "";
};

export const clear = () => {
  const output = document.querySelector(".output");
  output ? (output.innerHTML = "") : null;

  return "";
};
