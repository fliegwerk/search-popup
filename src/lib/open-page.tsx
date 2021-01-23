function notOnSamePage(pathname: string) {
    return (window.location.pathname.endsWith('/')
        ? window.location.pathname
        : window.location.pathname + '/') !==
        (pathname.endsWith('/') ? pathname : pathname + '/');
}

export function openPage(pathname: string, hash: string) {
	if (
		notOnSamePage(pathname)
	) {
		window.location.assign(pathname + '#' + hash);
	} else {
		window.location.hash = hash;
	}
}
