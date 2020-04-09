<p align="center"><a href="https://nodei.co/npm/discord-streamrole/"><img src="https://nodei.co/npm/discord-streamrole.png"></a></p>
<p align="center">
<a href="https://www.npmjs.com/package/discord-streamrole"><img src="https://img.shields.io/npm/v/discord-streamrole.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/discord-streamrole"><img src="https://img.shields.io/npm/dt/discord-streamrole.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://www.patreon.com/iVan21"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
</p>

# discord-streamrole
A module that assign a temporary role to streamers when they go live automamatically, it helps to know that someone is streaming

## Installation
You will need [Discord.js](https://discord.js.org/#/) bot setup.
Then use the following command to install the module and it depedencies.

```
npm i discord-streamrole
``` 

Once you've done this, you can follow the code below to get started!

## Usage
```js
const Streamrole = require("discord-streamrole");

Streamrole(bot, {
	live :  "LIVE", // you can change LIVE for other role name (Also STREAMER in the next line)
	required : "STREAMER" // if you want to take action on people of a specific role (remember  adding the comma after "LIVE")
});
```

## Warning
-If you take actions on roles that have duplicate name, the module might get confused   
-If you are using "client" as const, you will need to change that const to "bot"   
-Remember that the role specified in the code is exctrictly case sensitive   
-The bot needs a role that has to be above of the live role

~~const client = new Discord.Client();~~
```js
const bot = new Discord.Client();
```

## Notes
This module was initialy coded by:  
-Flisher   
-The Bucherons.ca gamers community   
-The Star Citizen Organization "Gardiens du LYS".   
  
Links:  
https://www.npmjs.com/package/discord-streaming   
https://www.bucherons.ca   
https://www.gardiensdulys.com   

## Official links:
GitHub repository: https://github.com/IvanGodinez21/discord-streamrole   
NPM Package: https://www.npmjs.com/package/discord-streamrole   


## History:  

1.1.4 Updated README.md, Some descriptions updated   
1.1.3 Updated streaming.js, Some descriptions updated   
1.1.2 Updated streaming.js, Fixed an syntax error   
1.1.1 Updated streaming.js, Added new console.log lines if is find a problem with a role   
1.1.0 Updated streaming.js, If the streamer have a custom status, the code still working   
1.0.2 Updated README.md, Some descriptions updated   
1.0.1 Updated README.md, Some descriptions updated   