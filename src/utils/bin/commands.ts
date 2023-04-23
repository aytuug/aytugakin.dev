// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n\
[Tab]: Trigger completion.
[Ctrl+L] / clear: Clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome To My Website!
More About Me:
'sumfetch' - Short Summary.
'readme' - My Github Readme File.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening LinkedIn...';
};

// Search
// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `

 █████╗ ██╗   ██╗████████╗██╗   ██╗ ██████╗  █████╗ ██╗  ██╗██╗███╗   ██╗
██╔══██╗╚██╗ ██╔╝╚══██╔══╝██║   ██║██╔════╝ ██╔══██╗██║ ██╔╝██║████╗  ██║
███████║ ╚████╔╝    ██║   ██║   ██║██║  ███╗███████║█████╔╝ ██║██╔██╗ ██║
██╔══██║  ╚██╔╝     ██║   ██║   ██║██║   ██║██╔══██║██╔═██╗ ██║██║╚██╗██║
██║  ██║   ██║      ██║   ╚██████╔╝╚██████╔╝██║  ██║██║  ██╗██║██║ ╚████║
╚═╝  ╚═╝   ╚═╝      ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
                                                                                                                                                                           

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
