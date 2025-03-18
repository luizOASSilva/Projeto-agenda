/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./public/css/styles.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./public/css/styles.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! tailwindcss v4.0.14 | MIT License | https://tailwindcss.com */
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-700: oklch(0.505 0.213 27.518);
    --color-red-800: oklch(0.444 0.177 26.899);
    --color-amber-400: oklch(0.828 0.189 84.429);
    --color-amber-950: oklch(0.279 0.077 45.635);
    --color-blue-50: oklch(0.97 0.014 254.604);
    --color-purple-50: oklch(0.977 0.014 308.299);
    --color-purple-100: oklch(0.946 0.033 307.174);
    --color-purple-300: oklch(0.827 0.119 306.383);
    --color-purple-400: oklch(0.714 0.203 305.504);
    --color-purple-600: oklch(0.558 0.288 302.321);
    --color-purple-700: oklch(0.496 0.265 301.924);
    --color-purple-800: oklch(0.438 0.218 303.724);
    --color-purple-900: oklch(0.381 0.176 304.987);
    --color-purple-950: oklch(0.291 0.149 302.717);
    --color-fuchsia-950: oklch(0.293 0.136 325.661);
    --color-gray-50: oklch(0.985 0.002 247.839);
    --color-gray-100: oklch(0.967 0.003 264.542);
    --color-gray-500: oklch(0.551 0.027 264.364);
    --color-gray-600: oklch(0.446 0.03 256.802);
    --color-gray-700: oklch(0.373 0.034 259.733);
    --color-gray-800: oklch(0.278 0.033 256.848);
    --color-gray-900: oklch(0.21 0.034 264.665);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --font-weight-extralight: 200;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;
    --default-font-family: var(--font-sans);
    --default-font-feature-settings: var(--font-sans--font-feature-settings);
    --default-font-variation-settings: var(
      --font-sans--font-variation-settings
    );
    --default-mono-font-family: var(--font-mono);
    --default-mono-font-feature-settings: var(
      --font-mono--font-feature-settings
    );
    --default-mono-font-variation-settings: var(
      --font-mono--font-variation-settings
    );
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var( --default-font-variation-settings, normal );
    -webkit-tap-highlight-color: transparent;
  }
  body {
    line-height: inherit;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var( --default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );
    font-feature-settings: var( --default-mono-font-feature-settings, normal );
    font-variation-settings: var( --default-mono-font-variation-settings, normal );
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
    color: color-mix(in oklab, currentColor 50%, transparent);
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-1 {
    right: calc(var(--spacing) * 1);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-5 {
    right: calc(var(--spacing) * 5);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-1 {
    bottom: calc(var(--spacing) * 1);
  }
  .bottom-2 {
    bottom: calc(var(--spacing) * 2);
  }
  .bottom-5 {
    bottom: calc(var(--spacing) * 5);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .float-right {
    float: right;
  }
  .m-2 {
    margin: calc(var(--spacing) * 2);
  }
  .m-auto {
    margin: auto;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .-mt-10 {
    margin-top: calc(var(--spacing) * -10);
  }
  .mt-0 {
    margin-top: calc(var(--spacing) * 0);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mt-9 {
    margin-top: calc(var(--spacing) * 9);
  }
  .mt-10 {
    margin-top: calc(var(--spacing) * 10);
  }
  .mt-12 {
    margin-top: calc(var(--spacing) * 12);
  }
  .mt-14 {
    margin-top: calc(var(--spacing) * 14);
  }
  .mt-16 {
    margin-top: calc(var(--spacing) * 16);
  }
  .mt-20 {
    margin-top: calc(var(--spacing) * 20);
  }
  .mt-24 {
    margin-top: calc(var(--spacing) * 24);
  }
  .mt-28 {
    margin-top: calc(var(--spacing) * 28);
  }
  .mt-40 {
    margin-top: calc(var(--spacing) * 40);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .mb-10 {
    margin-bottom: calc(var(--spacing) * 10);
  }
  .mb-12 {
    margin-bottom: calc(var(--spacing) * 12);
  }
  .mb-14 {
    margin-bottom: calc(var(--spacing) * 14);
  }
  .mb-16 {
    margin-bottom: calc(var(--spacing) * 16);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-8 {
    margin-left: calc(var(--spacing) * 8);
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .table {
    display: table;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-14 {
    height: calc(var(--spacing) * 14);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-24 {
    height: calc(var(--spacing) * 24);
  }
  .h-25 {
    height: calc(var(--spacing) * 25);
  }
  .h-30 {
    height: calc(var(--spacing) * 30);
  }
  .h-36 {
    height: calc(var(--spacing) * 36);
  }
  .h-60 {
    height: calc(var(--spacing) * 60);
  }
  .h-72 {
    height: calc(var(--spacing) * 72);
  }
  .h-96 {
    height: calc(var(--spacing) * 96);
  }
  .h-\\[80vh\\] {
    height: 80vh;
  }
  .h-dvh {
    height: 100dvh;
  }
  .h-min {
    height: min-content;
  }
  .min-h-dvh {
    min-height: 100dvh;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2xl {
    width: var(--container-2xl);
  }
  .w-2xs {
    width: var(--container-2xs);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3xl {
    width: var(--container-3xl);
  }
  .w-3xs {
    width: var(--container-3xs);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4xl {
    width: var(--container-4xl);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-5xl {
    width: var(--container-5xl);
  }
  .w-6xl {
    width: var(--container-6xl);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-7xl {
    width: var(--container-7xl);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-20 {
    width: calc(var(--spacing) * 20);
  }
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-34 {
    width: calc(var(--spacing) * 34);
  }
  .w-40 {
    width: calc(var(--spacing) * 40);
  }
  .w-72 {
    width: calc(var(--spacing) * 72);
  }
  .w-100 {
    width: calc(var(--spacing) * 100);
  }
  .w-dvw {
    width: 100dvw;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .w-xl {
    width: var(--container-xl);
  }
  .w-xs {
    width: var(--container-xs);
  }
  .max-w-2 {
    max-width: calc(var(--spacing) * 2);
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-2xs {
    max-width: var(--container-2xs);
  }
  .max-w-3 {
    max-width: calc(var(--spacing) * 3);
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-4xl {
    max-width: var(--container-4xl);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .min-w-full {
    min-width: 100%;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .transform {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-x-2 {
    column-gap: calc(var(--spacing) * 2);
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-xs {
    border-radius: var(--radius-xs);
  }
  .rounded-e-full {
    border-start-end-radius: calc(infinity * 1px);
    border-end-end-radius: calc(infinity * 1px);
  }
  .rounded-ee-4xl {
    border-end-end-radius: var(--radius-4xl);
  }
  .rounded-es-4xl {
    border-end-start-radius: var(--radius-4xl);
  }
  .rounded-es-xl {
    border-end-start-radius: var(--radius-xl);
  }
  .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-tr-full {
    border-top-right-radius: calc(infinity * 1px);
  }
  .rounded-b-3xl {
    border-bottom-right-radius: var(--radius-3xl);
    border-bottom-left-radius: var(--radius-3xl);
  }
  .rounded-b-4xl {
    border-bottom-right-radius: var(--radius-4xl);
    border-bottom-left-radius: var(--radius-4xl);
  }
  .rounded-b-full {
    border-bottom-right-radius: calc(infinity * 1px);
    border-bottom-left-radius: calc(infinity * 1px);
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .rounded-b-xs {
    border-bottom-right-radius: var(--radius-xs);
    border-bottom-left-radius: var(--radius-xs);
  }
  .rounded-br-4xl {
    border-bottom-right-radius: var(--radius-4xl);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-3xl {
    border-bottom-left-radius: var(--radius-3xl);
  }
  .rounded-bl-4xl {
    border-bottom-left-radius: var(--radius-4xl);
  }
  .rounded-bl-full {
    border-bottom-left-radius: calc(infinity * 1px);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-solid {
    --tw-border-style: solid;
    border-style: solid;
  }
  .border-gray-500 {
    border-color: var(--color-gray-500);
  }
  .border-gray-700 {
    border-color: var(--color-gray-700);
  }
  .border-gray-900 {
    border-color: var(--color-gray-900);
  }
  .border-purple-700 {
    border-color: var(--color-purple-700);
  }
  .border-purple-800 {
    border-color: var(--color-purple-800);
  }
  .bg-amber-400 {
    background-color: var(--color-amber-400);
  }
  .bg-amber-950 {
    background-color: var(--color-amber-950);
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-800 {
    background-color: var(--color-gray-800);
  }
  .bg-purple-50 {
    background-color: var(--color-purple-50);
  }
  .bg-purple-100 {
    background-color: var(--color-purple-100);
  }
  .bg-purple-300 {
    background-color: var(--color-purple-300);
  }
  .bg-purple-600 {
    background-color: var(--color-purple-600);
  }
  .bg-purple-700 {
    background-color: var(--color-purple-700);
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-purple-950 {
    background-color: var(--color-purple-950);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-10 {
    padding: calc(var(--spacing) * 10);
  }
  .p-36 {
    padding: calc(var(--spacing) * 36);
  }
  .px-0 {
    padding-inline: calc(var(--spacing) * 0);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .ps-6 {
    padding-inline-start: calc(var(--spacing) * 6);
  }
  .pt-1 {
    padding-top: calc(var(--spacing) * 1);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pb-1 {
    padding-bottom: calc(var(--spacing) * 1);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .pl-0 {
    padding-left: calc(var(--spacing) * 0);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-10 {
    padding-left: calc(var(--spacing) * 10);
  }
  .text-center {
    text-align: center;
  }
  .text-start {
    text-align: start;
  }
  .align-middle {
    vertical-align: middle;
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .font-serif {
    font-family: var(--font-serif);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-extrabold {
    --tw-font-weight: var(--font-weight-extrabold);
    font-weight: var(--font-weight-extrabold);
  }
  .font-extralight {
    --tw-font-weight: var(--font-weight-extralight);
    font-weight: var(--font-weight-extralight);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .text-black {
    color: var(--color-black);
  }
  .text-fuchsia-950 {
    color: var(--color-fuchsia-950);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-inherit {
    color: inherit;
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-purple-600 {
    color: var(--color-purple-600);
  }
  .text-purple-700 {
    color: var(--color-purple-700);
  }
  .text-purple-800 {
    color: var(--color-purple-800);
  }
  .text-purple-900 {
    color: var(--color-purple-900);
  }
  .text-purple-950 {
    color: var(--color-purple-950);
  }
  .text-red-700 {
    color: var(--color-red-700);
  }
  .text-red-800 {
    color: var(--color-red-800);
  }
  .text-white {
    color: var(--color-white);
  }
  .underline {
    text-decoration-line: underline;
  }
  .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-2xs {
    --tw-shadow: 0 1px var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-black {
    --tw-shadow-color: var(--color-black);
  }
  .shadow-gray-700 {
    --tw-shadow-color: var(--color-gray-700);
  }
  .inset-shadow-gray-700 {
    --tw-inset-shadow-color: var(--color-gray-700);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .hover\\:bg-purple-800 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-purple-800);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
  .sm\\:flex {
    @media (width >= 40rem) {
      display: flex;
    }
  }
  .sm\\:grid-cols-2 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .md\\:right-4 {
    @media (width >= 48rem) {
      right: calc(var(--spacing) * 4);
    }
  }
  .md\\:bottom-4 {
    @media (width >= 48rem) {
      bottom: calc(var(--spacing) * 4);
    }
  }
}
@layer base {
  * {
    box-sizing: border-box;
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
  initial-value: rotateX(0);
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
  initial-value: rotateY(0);
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
  initial-value: rotateZ(0);
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
  initial-value: skewX(0);
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
  initial-value: skewY(0);
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}`, "",{"version":3,"sources":["webpack://./public/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import 'tailwindcss';\r\n\r\n@layer base {\r\n    * {\r\n        box-sizing: border-box;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./public/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/css/styles.css */ "./public/css/styles.css");

var copyYear = document.querySelector('#copyYear');
(function () {
  if (copyYear) {
    var date = new Date();
    var year = date.getFullYear();
    var textNode = document.createTextNode(year);
    copyYear.appendChild(textNode);
  } else {
    return;
  }
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map