<p align="center"><a href="https://nodei.co/npm/discord-streamrole/"><img src="https://nodei.co/npm/discord-streamrole.png"></a></p>
<p align="center">
<a href="https://www.npmjs.com/package/discord-streamrole"><img src="https://img.shields.io/npm/v/discord-streamrole.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/discord-streamrole"><img src="https://img.shields.io/npm/dt/discord-streamrole.svg?maxAge=3600" alt="NPM downloads" /></a>
<p align="center"><a href="https://github.com/sponsors/IvanGodinez21"><img src="https://user-images.githubusercontent.com/1902323/65816833-f3393200-e200-11e9-9006-ff4c77e3a79c.png" height="40" width="100" alt="Sponsors" /></a></p>

# discord-streamrole
A module that assign a temporary role to streamers when they go live automamatically, it helps to know that someone is streaming

## Installation
You will need [Discord.js](https://discord.js.org/#/) v12 bot setup.
Then use the following command to install the module and it depedencies.

```
npm i discord-streamrole
``` 

Once you've done this, you can follow the code below to get started!

## Usage for everyone in the discord server
```js
const Streamrole = require("discord-streamrole");

Streamrole(bot, {
	live :  "LIVE", // LIVE is the ROL that a live streamer acquires | you can change LIVE for other role name that you want to use
	console : true // You can enable or disable the console.log from the package if you want | Use true to enable and use false to disable
});
```
## Usage for people who has a specific role in the discord server
```js
const Streamrole = require("discord-streamrole");

Streamrole(bot, {
	live :  "LIVE", // LIVE is the ROL that a live streamer acquires | you can change LIVE for other role name that you want to use
	required : "STREAMER", // STREAMER is the ROL that a live streamer needs to acquiere the LIVE ROL | you can change STREAMER for other role name that you want to use (remember adding the comma after "LIVE")
	console : false // You can enable or disable the console.log from the package if you want | Use true to enable and use false to disable
});
```

## Warning
-If you take actions on roles that have duplicate name, the module might get confused   
-Remember that the role specified in the code is exctrictly case sensitive   
-The bot needs a role that has to be above of the live role   

## Notes
-This package is using cron package, assigning the role will take a minute     
-If you are using "client" as const, maybe you should change that const to "bot"    

```js
const client = new Discord.Client(); ❌
```
```js
const bot = new Discord.Client(); ✔
```


## Official links:
GitHub repository: https://github.com/IvanGodinez21/discord-streamrole   
NPM Package: https://www.npmjs.com/package/discord-streamrole   


## History:  
### 2.X.X   
2.1.1 Updated streaming.js, added a new option "console", also now require the package ascii-table   
2.0.1 Added links   
2.0.0 Updated streaming.js, Now works **ONLY** for discord.js v12   

### 1.X.X   
1.1.8 Added LICENSE file & last version using discord.js V11   
1.1.7 Updated streaming.js, Some descriptions updated   
1.1.6 Updated LICENSE   
1.1.5 Updated README.md, Some descriptions updated   
1.1.4 Updated README.md, Some descriptions updated   
1.1.3 Updated streaming.js, Some descriptions updated   
1.1.2 Updated streaming.js, Fixed an syntax error   
1.1.1 Updated streaming.js, Added new console.log lines if is find a problem with a role   
1.1.0 Updated streaming.js, If the streamer have a custom status, the code still working   
1.0.2 Updated README.md, Some descriptions updated   
1.0.1 Updated README.md, Some descriptions updated   
1.0.0 Initial publish   


## Credits
This module was initialy coded by:  
-Flisher   
-The Bucherons.ca gamers community   
-The Star Citizen Organization "Gardiens du LYS".   

Links:  
https://www.npmjs.com/package/discord-streaming   
https://www.bucherons.ca   
https://www.gardiensdulys.com   