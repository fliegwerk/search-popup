import {openPage} from '../lib/open-page';
import {DialogContentParams} from "../components/dialog-content-params";

export function useOnSubmitCallback(
	results: { url: string; text: string; title: string }[],
	props: DialogContentParams,
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
