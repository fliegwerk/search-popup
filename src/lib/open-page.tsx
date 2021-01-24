function notOnSamePage(pathname: string) {
	return (
		(window.location.pathname.endsWith('/')
			? window.location.pathname
			: window.location.pathname + '/') !==
		(pathname.endsWith('/') ? pathname : pathname + '/')
	);
}

export function openPage(pathname: string, hash: string) {
	if (notOnSamePage(pathname)) {
		window.location.assign(pathname + '#' + hash);
	} else {
		// INCOMPATIBLE WITH scroll-behavior: smooth on Chrome!
		// tested with Chrome 87.0.4280.141
		window.location.hash = hash;
	}
}
