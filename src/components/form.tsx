import {SearchInput} from './search-input';
import {h} from 'preact';
import {FormParams} from "./form-params";
import {useFormKeyDownHandler} from "../hooks/use-form-key-down-handler";

export function Form(props: FormParams) {
    const onKeyDown = useFormKeyDownHandler(props);

    return (
		<form id="search-form" onSubmit={props.onSubmit}>
			<SearchInput
				value={props.query}
				onInput={(evt) => props.onChange((evt.target as HTMLInputElement).value)}
				onKeyDown={onKeyDown}
			/>
		</form>
	);
}
