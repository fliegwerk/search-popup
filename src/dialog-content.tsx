import {h} from "preact";
import {useCallback, useRef, useState} from "preact/hooks";
import SearchResult from "./option";

const DialogContent = (props: {
    index: number;
    up: Function;
    down: Function;
    reset: Function;
    searchFn: Function;
    onClose: Function;
}) => {
    const [results, setResults] = useState<{ url: string, text: string, title: string }[]>([]);
    const [query, setQuery] = useState("");
    const listRef = useRef<HTMLUListElement>(null);
    const onKeyDown = useCallback(
        (evt: KeyboardEvent) => {
            if (evt.keyCode === 38) {
                // up
                evt.preventDefault();
                if (props.index > 0) props.up();
            } else if (evt.keyCode === 40) {
                // down
                evt.preventDefault();
                if (props.index < results.length - 1) props.down();
            }
        },
        [props.index, props.up, props.down, results]
    );

    const onChange = useCallback(
        (value: string): void => {
            setQuery(value);
            setResults(props.searchFn(value))
            props.reset();
            listRef.current?.scrollTo({behavior: 'smooth', top: 0})
        },
        [setQuery, props.reset]
    );

    function onSubmit(evt: Event) {
        evt.preventDefault();
        const [pathname, hash] = (results[props.index].url).split('#');

        if (
            (window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/')
            !==
            (pathname.endsWith('/') ? pathname : pathname + '/')
        ) {
            window.location.assign(pathname + '#' + hash);
        } else {
            window.location.hash = hash;
        }
        props.onClose();
        onChange('');
    }

    return (
        <div>
            <h2>Search</h2>
            <p>
                Press <kbd>ESC</kbd> to exit, <kbd>&darr;</kbd>,{" "}
                <kbd>&uarr;</kbd> to navigate, and <kbd>Return</kbd>{" "}
                accept.
            </p>
            <form id="search-form" onSubmit={onSubmit}>
                <input
                    id="search-input"
                    autoComplete="off"
                    type="search"
                    autoFocus
                    value={query}
                    onInput={evt =>
                        onChange((evt.target as HTMLInputElement).value)
                    }
                    onKeyDown={onKeyDown}
                />
            </form>
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
};

export default DialogContent;
