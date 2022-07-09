export const showCommand = (command: string) =>
  `<span style="color: #3b78ff">${command}</span>`;

export const showError = (errorMessage: string) =>
  `<span style="color: #c50f1f;">Error.</span> ${errorMessage}`;

export const STARTING_MESSAGE = `
Mariodev Terminal Portfolio [v1.0.0].
(c) Site Created By <a href="https://mariodev.vercel.app">Mariodev</a>.

You can type \`${showCommand("help")}\` to start!

`;

export const CONTACT_INFO = `
You can contact me on email: mario.developer.contact@gmail.com

Or you can find me on instagram (@meriofrog) and github (Meriegg).

`;

export const ABOUT_ME = `
Hi, I am Mario, a 14 year old full stack developer based in Romania. I've been coding for almost 3 years
now. I create full stack websites and apps using React, respectively Next.js for web apps 
and React Native for mobile apps. I use Node.js and GraphQL for backend, and Postgres or Mongodb 
for the database.

You can type \`contact\` to see how you can contact me. Or you can type \`help\` to get
some help on what you can type!

`;

export const HELP = `
Here is what you can do:

    ${showCommand("about")}: some things about me :).
    ${showCommand("contact")}: get my contact info.
    ${showCommand(
      "contact --instagram || github || gmail"
    )}: be redirected to the selected contact form.
    ${showCommand("clear")}: clear the terminal.
    ${showCommand("credentials")}: display the beginning credentials.
    ${showCommand("exit")}: be redirected to my website.
    ${showCommand("source")}: be redirected to the source code of this website.

`;
