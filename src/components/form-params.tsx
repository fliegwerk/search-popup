import { ResultSelectionParams } from '../lib/result-selection-params';

export interface FormParams extends ResultSelectionParams {
	onSubmit: (evt: Event) => void;
	query: string;
	onChange: (value: string) => void;
	resultsLength: number;
}
