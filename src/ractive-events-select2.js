/*

	ractive-events-select2
	======================

	Version <%= pkg.version %>.

	<< description goes here... >>

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-events-select2.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-events-select2' );

	<< more specific instructions for this plugin go here... >>

*/

(function(global, factory) {

	'use strict';

	// AMD environment
	if (typeof define === 'function' && define.amd) {
		define(['ractive', 'jquery'], factory);
	}

	// Common JS (i.e. node/browserify)
	else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
		factory(require('ractive'), require('jquery'));
	}

	// browser global
	else if (global.Ractive && global.jQuery) {
		factory(global.Ractive, global.jQuery);
	} else {
		throw new Error('Could not find Ractive! It must be loaded before the ractive-events-select2 plugin');
	}

}(typeof window !== 'undefined' ? window : this, function(Ractive, $) {

	'use strict';

	/* plugin code goes here */

	/*
		change is fired whenever an option is selected or removed.
		select2:open is fired whenever the dropdown is opened. select2:opening is fired before this and can be prevented.
		select2:close is fired whenever the dropdown is closed. select2:closing is fired before this and can be prevented.
		select2:select is fired whenever a result is selected. select2:selecting is fired before this and can be prevented.
		select2:unselect is fired whenever a result is unselected. select2:unselecting is fired before this and can be prevented.
	*/

	Ractive.events.select2opening = function(node, fire) {
		var select2openingHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:opening', select2openingHandler);

			return {
				teardown: function() {
					$(node).off('select2:opening', select2openingHandler);
				}
			};
		};
	};

	Ractive.events.select2open = function(node, fire) {
		var select2openHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:open', select2openHandler);

			return {
				teardown: function() {
					$(node).off('select2:open', select2openHandler);
				}
			};
		};
	};

	Ractive.events.select2closing = function(node, fire) {
		var select2closingHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:closing', select2closingHandler);

			return {
				teardown: function() {
					$(node).off('select2:closing', select2closingHandler);
				}
			};
		};
	};

	Ractive.events.select2close = function(node, fire) {
		var select2closeHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:close', select2closeHandler);

			return {
				teardown: function() {
					$(node).off('select2:close', select2closeHandler);
				}
			};
		};
	};

	Ractive.events.select2selecting = function(node, fire) {
		var select2selectingHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:selecting', select2selectingHandler);

			return {
				teardown: function() {
					$(node).off('select2:selecting', select2selectingHandler);
				}
			};
		};
	};

	Ractive.events.select2select = function(node, fire) {
		var select2selectHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:select', select2selectHandler);

			return {
				teardown: function() {
					$(node).off('select2:select', select2selectHandler);
				}
			};
		};
	};

	Ractive.events.select2unselecting = function(node, fire) {
		var select2unselectingHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:unselecting', select2unselectingHandler);

			return {
				teardown: function() {
					$(node).off('select2:unselecting', select2unselectingHandler);
				}
			};
		};
	};

	Ractive.events.select2unselect = function(node, fire) {
		var select2unselectHandler = function(event) {
			fire({
				node: node,
				original: event
			});

			$(node).on('select2:unselect', select2unselectHandler);

			return {
				teardown: function() {
					$(node).off('select2:unselect', select2unselectHandler);
				}
			};
		};
	};

}));