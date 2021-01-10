import {h} from "preact";
import {useEffect, useLayoutEffect, useRef, useState} from "preact/hooks";
import dialogPolyfill from "dialog-polyfill";
import DialogContent from "./dialog-content";

const SearchPopup = (props: { results: any[], search: string }) => {
    const [index, setIndex] = useState(0);

    if ((window as any)[props.search] !== undefined)
        (window as any)[props.search]();
    else {
        console.error('Search function passed to <search-popup> is undefined!')
    }

    (window as any).openSearch = () => {
        setIndex(0);
        dialogRef.current?.showModal();
    }

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (dialogRef) {
            dialogPolyfill.registerDialog(dialogRef.current);
        }
    }, [dialogRef]);

    useLayoutEffect(() => {
        document.onkeydown = evt => {
            if (evt.ctrlKey && evt.key === "k") {
                evt.preventDefault();
                setIndex(0);
                dialogRef.current?.showModal();
            }
        };
    }, []);

    const defaultSearch = () => [];

    return (
        <dialog class="search-dialog shadowed" ref={dialogRef}>
            <DialogContent
                onClose={() => dialogRef.current?.close()}
                searchFn={(window as any)[props.search] ?? defaultSearch}
                index={index}
                up={() => setIndex(index - 1)}
                down={() => setIndex(index + 1)}
                reset={() => setIndex(0)}
            />
        </dialog>
    );
};

export default SearchPopup;
