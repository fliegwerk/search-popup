import {h} from "preact";
import {useLayoutEffect, useRef} from "preact/hooks";

const SearchResult = ({ active, result }: { active: boolean; result: any }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    useLayoutEffect(() => {
        if (ref.current && active) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }, [active, ref]);

    return (
        <li
            key={result.url}
            aria-type={"options"}
            aria-selected={active}
            className={active ? "active" : ""}
        >
            <a href={result.url} ref={ref}>
                <p>
                    <small>{result.url}</small>
                </p>
                <h5>{result.name}</h5>
                <p>{result.text}</p>
            </a>
        </li>
    );
};

export default SearchResult;
