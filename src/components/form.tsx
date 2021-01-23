import {useCallback} from 'preact/hooks';
import {SearchInput} from './search-input';
import {h} from 'preact';
import {FormParams} from "./form-params";

export function Form(props: FormParams) {
	const onKeyDown = useCallback(
		(evt: KeyboardEvent) => {
			if (evt.code === 'ArrowUp') {
				evt.preventDefault();
				if (props.index > 0) props.up();
			} else if (evt.code === 'ArrowDown') {
				evt.preventDefault();
				if (props.index < props.resultsLength - 1) props.down();
			}
		},
		[props.index, props.up, props.down, props.resultsLength]
	);

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
