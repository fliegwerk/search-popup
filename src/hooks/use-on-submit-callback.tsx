import {openPage} from '../lib/open-page';

export function useOnSubmitCallback(
	results: { url: string; text: string; title: string }[],
	props: {
		index: number;
		up: Function;
		down: Function;
		reset: Function;
		searchFn: Function;
		onClose: Function;
	},
	onChange: (value: string) => void
) {
    return (evt: Event) => {
        evt.preventDefault();
        const [pathname, hash] = results[props.index].url.split('#');
        openPage(pathname, hash);
        props.onClose();
        onChange('');
    };
}
