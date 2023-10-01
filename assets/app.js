/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

// import Jquery
import $ from 'jquery';
window.$ = window.jQuery = $;

import 'select2';
import 'select2/dist/css/select2.min.css';


