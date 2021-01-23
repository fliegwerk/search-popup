import { useCallback } from 'preact/hooks';
import { SearchInput } from './search-input';
import { h } from 'preact';

export function Form(props: {
	onSubmit: (evt: Event) => void;
	query: string;
	onChange: (value: string) => void;
	up: Function;
	down: Function;
	index: number;
	resultsLength: number;
}) {
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
