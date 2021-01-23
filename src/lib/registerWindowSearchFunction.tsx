export function registerWindowSearchFunction(
	props: { results: any[]; search: string },
	setIndex: (value: ((prevState: number) => number) | number) => void,
	onOpen: () => void
) {
	if ((window as any)[props.search] !== undefined)
		(window as any)[props.search]();
	else {
		console.error('Search function passed to <search-popup> is undefined!');
	}

	(window as any).openSearch = () => {
		setIndex(0);
		onOpen();
	};
}
