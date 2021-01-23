import { ResultSelectionParams } from '../lib/result-selection-params';

export interface DialogContentParams extends ResultSelectionParams {
	reset: Function;
	searchFn: Function;
	onClose: Function;
}
