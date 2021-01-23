export function openPage(pathname: string, hash: string) {
	if (
		(window.location.pathname.endsWith('/')
			? window.location.pathname
			: window.location.pathname + '/') !==
		(pathname.endsWith('/') ? pathname : pathname + '/')
	) {
		window.location.assign(pathname + '#' + hash);
	} else {
		window.location.hash = hash;
	}
}
