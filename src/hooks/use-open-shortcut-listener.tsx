import { useLayoutEffect } from 'preact/hooks';

export function useOpenShortcutListener(
	setIndex: (value: ((prevState: number) => number) | number) => void,
	onOpen: () => void,
	onClose: () => void
) {
	useLayoutEffect(() => {
		document.onkeydown = (evt) => {
			if (evt.ctrlKey && evt.key === 'k') {
				evt.preventDefault();
				setIndex(0);
				onOpen();
			} else if (evt.key === 'Escape') {
				evt.preventDefault();
				onClose();
			}
		};
	}, []);
}
