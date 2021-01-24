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
		location.assign(pathname + '#' + hash);
	} else {
		const element = document.getElementById(hash);
		if (element) {
			location.hash = hash;
			/*
            Chrome, tested in 87.0.4280.141, doesn't scroll to the element on the same page (with any location function,
            i.e., location.assign, location.replace, location =, location.href =, ... when scroll-behaviour: smooth
            is set, e.g., using CSS.

            Also, element.scrollIntoView does nothing (maybe, because it's inside a web component?).

            scrollTo, however, seems to work :P
             */
			window.scrollTo({ top: element?.offsetTop || 0 });
		}
	}
}
