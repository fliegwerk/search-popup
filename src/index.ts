/**
 * @licence Copyright 2020 Pablo Klaschka. MIT-Licensed.
 */

import register from 'preact-custom-element';
import SearchPopup from "./searchPopup";

import './index.css'
(window as any).openSearch = () => {};
register(SearchPopup, 'search-popup', ['search'] );
