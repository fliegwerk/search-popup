export function openPage(pathname: string, hash: string) {
	window.open(pathname + '#' + hash, '_top');
}
