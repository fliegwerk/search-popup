import {h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import SearchResult from './search-result';
import {useOnChangeCallback} from '../hooks/use-on-change-callback';
import {Preface} from './preface';
import {useOnSubmitCallback} from '../hooks/use-on-submit-callback';
import {Form} from './form';
import {DialogContentParams} from "./dialog-content-params";

export default function DialogContent(props: DialogContentParams) {
	const [results, setResults] = useState<
		{ url: string; text: string; title: string }[]
	>([]);
	const [query, setQuery] = useState('');
	const listRef = useRef<HTMLUListElement>(null);
	const onChange = useOnChangeCallback(setQuery, setResults, props, listRef);
	const onSubmit = useOnSubmitCallback(results, props, onChange);

	return (
		<div>
			<Preface />
			<Form
				onSubmit={onSubmit}
				query={query}
				onChange={onChange}
				index={props.index}
				up={props.up}
				down={props.down}
				resultsLength={results.length}
			/>
			<ul ref={listRef}>
				{results.map((result, index) => (
					<SearchResult
						key={result.url}
						active={index === props.index}
						result={result}
					/>
				))}
			</ul>
		</div>
	);
}
