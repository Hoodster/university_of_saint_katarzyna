import Command from "./command"

export default function Commands() {
	const _commands = Object.freeze({
		'page': { aliases: ['p'] },
		'section': { aliases: ['s'] },
		'template': { aliases: ['t'] },
		'component': { aliases: ['c'] },
		'hook': { aliases: ['ho'] }
	})

	const _customCommands = {}

	const _allCommands =
}

Commands.prototype.addCommand = (name, aliases, exec) => {
	this._customCommands[name] = new Command(aliases, exec)
}