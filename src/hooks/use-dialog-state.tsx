import { useState } from 'preact/hooks';

export function useDialogState() {
	const [isOpen, setIsOpen] = useState(false);
	let onOpen = () => setIsOpen(true);
	let onClose = () => setIsOpen(false);
	return { isOpen, onOpen, onClose };
}
