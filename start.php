<?php

/**
 * vue
 *
 * vue.js integration for Elgg
 *
 * @author    Ismayil Khayredinov <info@hypejunction.com>
 * @copyright Copyright (c) 2017, Ismayil Khayredinov
 */
require_once __DIR__ . '/autoloader.php';

elgg_register_event_handler('init', 'system', 'elgg_vue_init');

function elgg_vue_init() {

	if (elgg_get_config('debug')) {
		$module = elgg_get_simplecache_url('vue/vue.js');
	} else {
		$module = elgg_get_simplecache_url('vue/vue.min.js');
	}

	elgg_define_js('Vue', [
		'src' => $module,
		'exports' => 'Vue',
	]);

	elgg_register_plugin_hook_handler('elgg.data', 'page', 'elgg_vue_filter_page_data', 9999);

	elgg_register_plugin_hook_handler('view_vars', 'page/elements/html', 'elgg_vue_mount');

	elgg_vue_register_component('elgg-icon');
}

/**
 * Add components to the page data to be consumed by client-side services
 *
 * @param string $hook   "elgg.data"
 * @param string $type   "page"
 * @param array  $return "page/elements/html"
 *
 * @return mixed
 */
function elgg_vue_filter_page_data($hook, $type, $return) {
	$return['vue']['components'] = elgg_vue_get_components();
	$return['vue']['devtools'] = (bool) elgg_get_config('debug');
	return $return;
}

/**
 * Wrap page content into a mountable vue context and mount it
 *
 * @param string $hook "view_vars"
 * @param string $type "page/elements/html"
 * @param array  $vars View vars
 *
 * @return mixed
 */
function elgg_vue_mount($hook, $type, $vars) {
	$vars['body'] = elgg_format_element('div', [
		'id' => 'elgg-vue-app',
	], $vars['body']);
	$vars['body'] .= elgg_view("elgg/vue-mount.html");

	return $vars;
}

/**
 * Register a Vue component for async loading
 *
 * @param string $name   Component name, e.g. elgg-likes
 * @param string $module AMD module name, defaults to "components/$name"
 *
 * @return void
 */
function elgg_vue_register_component($name, $module = null) {
	\Elgg\Vue\ComponentRegistrationService::getInstance()->register($name, $module);
}

/**
 * Unregister component
 *
 * @param string $name Component name
 *
 * @return void
 */
function elgg_vue_unregister_component($name) {
	\Elgg\Vue\ComponentRegistrationService::getInstance()->unregister($name);
}

/**
 * Check if component is registered
 *
 * @param string $name Component name
 *
 * @return bool
 */
function elgg_vue_is_registered($name) {
	return \Elgg\Vue\ComponentRegistrationService::getInstance()->isRegistered($name);
}

/**
 * Get all registered components
 *
 * @return array
 */
function elgg_vue_get_components() {
	return \Elgg\Vue\ComponentRegistrationService::getInstance()->getAll();
}