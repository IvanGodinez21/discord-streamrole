/*
	Streamers auto rol module for discord.js

	Author: Jesús Iván Godínez Martínez
	Github: IvanGodinez21
*/

module.exports = function (bot, options) {
	const cron = require('node-cron');

	const description = {
		name: `discord-streamrole`,
		filename: `streaming.js`,
		version: `2.0.0`
	}
	// Add check on startup
	bot.on("ready", () => {
		console.log(`------------------------------\nModule: ${description.name}\nVersion: ${description.version} \nFrom ("${description.filename}")\n------------------------------`)
		StreamingCheck(bot, options);
	});

	// Add a Cron job every minutes
	let jobStreamingCheck = new cron.schedule('* * * * *', function () {
		//Runs every minutes
		StreamingCheck(bot, options);
	});

	function StreamingCheck() {
		// bot, options
		if (options && options.live) {
			// Servers config, will get all the guilds found in the bot
			var serversSize = bot.guilds.cache.size
			for (x = 0; x < serversSize; x++) {
				var servers = []
				var serversGuilds = bot.guilds.cache
				serversGuilds.forEach((server) => servers.push(server))
				let guild = servers[x];
				StreamersLive(guild, options)
				StreamersNotLive(guild, options)
			}
		}
	}

	function StreamersLive(guild, options) {
		// Check if the bot can manage roles for this guild
		if (guild.me.hasPermission("MANAGE_ROLES")) {
			// Loop trough presence to find streamers
			let presences = guild.presences.cache;
			if (presences) {
				presences.forEach(function (element, key) {
					//Collect members presences
					games = []
					var presence = element.activities
					presence.forEach(activity => games.push(activity.type))
					var type = games.find(activity => activity == 'STREAMING')
					if (type) {
						if (typeof (type) != undefined) {
							if (type == 'STREAMING') {
								// key = userid
								let member = guild.members.cache.get(key)
								// Check if the "LIVE" Role exist
								if (guild.roles.cache.find(val => val.name === options.live)) {
									// Check if the position of the "LIVE" role is managable by the bot
									if (guild.me.roles.highest.position >= guild.roles.cache.find(val => val.name === options.live).position) {
										// Check if there is a role required ("STREAMER") in the configuration
										let bypass = false;
										if (typeof (options.required) === "undefined") {
											// If there is no required role ("STREAMRS"), bypass
											bypass = true;
										} else {
											// Check if the required role ("STREAMRS") exist and log an error message if missing
											if (!guild.roles.cache.find(val => val.name === options.required)) {
												console.log(`${description.name} | REQUIRED Role "${options.required}" doesn't exist on Guild "${guild.name}" (${guild.id})`);
											} else if (guild.me.roles.highest.position <= guild.roles.cache.find(val => val.name === options.required).position) {
												console.log(`${description.name} | LIVE Role "${options.required}" is higher than the bot highest permission on Guild "${guild.name}" (${guild.id})`);
											}

										}
										if (!member.user.bot && (bypass || (member.roles.cache.find(val => val.name === options.required)))) {
											// Check if the member doesn't already have the "LIVE" role
											if (!(member.roles.cache.find(val => val.name === options.live))) {												
												try {
													member.roles.add(guild.roles.cache.find(val => val.name === options.live)).catch(console.error);
				
												} catch (err) {
													console.error(err)
												}
											}
										}
									}
								} else {
									console.log(`${description.name} | LIVE Role "${options.live}" doesn't exist on Guild "${guild.name}" (${guild.id})`);
								}
							}
						}
					}
				});
			}
		} else {
			console.log(`${description.name} | Bot doesn't have "MANAGE_ROLES" permission on Guild "${guild.name}" (${guild.id})`);
		}
	}

	function StreamersNotLive(guild, options) {
		// Check if the bot can manage roles for this guild
		if (guild.me.hasPermission("MANAGE_ROLES")) {
			// Check if the live role exist
			if (guild.roles.cache.find(val => val.name === options.live)) {
				// Check if the position of the "LIVE" role is managable by the bot
				if (guild.me.roles.highest.position >= guild.roles.cache.find(val => val.name === options.live).position) {
					// Loop members of the "LIVE" role
					let streamers = guild.roles.cache.find(val => val.name === options.live).members
					//Collect members presences
					streamers.forEach(function (member, key) {
						let stillStreaming = 0;
						games = []
						let presence = member.guild.presences.cache.get(key);
						var activities = presence.activities
						activities.forEach(activity => games.push(activity.type))
						var type = games.find(activity => activity == 'STREAMING')
						if (presence) {
							if (presence.activities) {
								if (typeof (type) != undefined) {
									if (type === 'STREAMING') {
										stillStreaming = 1;
									}
								}
							}
							if (stillStreaming == 0) {
								try {
									member.roles.remove(guild.roles.cache.find(val => val.name === options.live)).catch(console.error);

								} catch (err) {
									console.error(err)
								}
							}
						}
					});
				} else {
					console.log(`${description.name} | LIVE Role "${options.live}" is higher than the bot highest permission on Guild "${guild.name}" (${guild.id})`);
				}
			} else {
				console.log(`${description.name} | LIVE Role "${options.live}" doesn't exist on Guild "${guild.name}" (${guild.id})`);
			}
		} else {
			console.log(`${description.name} | Bot doesn't have "MANAGE_ROLES" permission on Guild "${guild.name}" (${guild.id})`);
		}
	}
}