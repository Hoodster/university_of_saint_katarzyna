export default function Command(aliases, exec) {
	return { aliases, command: () => exec() }
}