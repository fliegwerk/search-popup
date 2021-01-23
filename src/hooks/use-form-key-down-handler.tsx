import {FormParams} from '../components/form-params';
import {useCallback} from 'preact/hooks';

export function useFormKeyDownHandler(props: FormParams) {
    return useCallback(
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
}
