import {Ref, useCallback} from 'preact/hooks';

export function useOnChangeCallback(
	setQuery: (value: ((prevState: string) => string) | string) => void,
	setResults: (
		value:
			| ((
					prevState: { url: string; text: string; title: string }[]
			  ) => { url: string; text: string; title: string }[])
			| { url: string; text: string; title: string }[]
	) => void,
	props: {
		index: number;
		up: Function;
		down: Function;
		reset: Function;
		searchFn: Function;
		onClose: Function;
	},
	listRef: Ref<HTMLUListElement>
) {
    return useCallback(
        (value: string): void => {
            setQuery(value);
            setResults(props.searchFn(value));
            props.reset();
            listRef.current?.scrollTo({behavior: 'smooth', top: 0});
        },
        [setQuery, props.reset]
    );
}
