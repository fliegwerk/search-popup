import { h } from 'preact';
import { JSXInternal } from 'preact/src/jsx';
import TargetedEvent = JSXInternal.TargetedEvent;
import { useEffect, useRef } from 'preact/hooks';

export function SearchInput(props: {
	value: string;
	onInput: (evt: TargetedEvent<HTMLInputElement, Event>) => void;
	onKeyDown: (evt: KeyboardEvent) => void;
}) {
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (ref.current) ref.current.focus();
	}, [ref]);

	return (
		<input
			id="search-input"
			autoComplete="off"
			type="search"
			autoFocus
			value={props.value}
			onInput={props.onInput}
			onKeyDown={props.onKeyDown}
			ref={ref}
		/>
	);
}
