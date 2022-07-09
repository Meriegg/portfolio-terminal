import * as commands from "./commands";
import { showError } from "./messages";

export default (command: string) => {
  switch (true || false) {
    case /clear/i.test(command):
      return commands.clear();

    case /credentials/i.test(command):
      return commands.starterCredentials();

    case /contact/i.test(command):
      return commands.contact(command);

    case /exit/i.test(command):
      return commands.exit();

    case /source/i.test(command):
      return commands.source();

    case /about/i.test(command):
      return commands.about();

    case /help/i.test(command):
      return commands.help();

    default:
      return showError("Unknown Command.");
  }
};
