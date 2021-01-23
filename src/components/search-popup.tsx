import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import DialogContent from './dialog-content';
import { registerWindowSearchFunction } from '../lib/registerWindowSearchFunction';
import { useOpenShortcutListener } from '../hooks/use-open-shortcut-listener';
import { useDialogState } from '../hooks/use-dialog-state';

const defaultSearch = () => [];

function getDialog(
	onClose: () => void,
	props: { results: any[]; search: string },
	index: number,
	setIndex: (value: ((prevState: number) => number) | number) => void
) {
	return (
		<div class="search-dialog shadowed">
			<DialogContent
				onClose={onClose}
				searchFn={(window as any)[props.search] ?? defaultSearch}
				index={index}
				up={() => setIndex(index - 1)}
				down={() => setIndex(index + 1)}
				reset={() => setIndex(0)}
			/>
		</div>
	);
}

const SearchPopup = (props: { results: any[]; search: string }) => {
	const [index, setIndex] = useState(0);
	let { isOpen, onOpen, onClose } = useDialogState();
	registerWindowSearchFunction(props, setIndex, onOpen);
	useOpenShortcutListener(setIndex, onOpen, onClose);

	return (
		<div id="search-wrapper">
			{isOpen && (
				<Fragment>
					<div class="backdrop" onClick={onClose}>
						&nbsp;
					</div>
					{getDialog(onClose, props, index, setIndex)}
				</Fragment>
			)}
		</div>
	);
};
export default SearchPopup;
