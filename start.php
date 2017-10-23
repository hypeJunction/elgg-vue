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

elgg_register_event_handler('init', 'system', function () {

	elgg_extend_view('elgg.js', 'vue/elgg.js');
	elgg_extend_view('elgg.css', 'vue/elgg.css');
	elgg_extend_view('admin.css', 'vue/elgg.css');

	elgg_register_plugin_hook_handler('view_vars', 'page/default', 'elgg_vue_mount');
	elgg_register_plugin_hook_handler('view_vars', 'page/admin', 'elgg_vue_mount');
});

/**
 * Wraps HTML content with a unique ID and mounts the vue application
 *
 * @param string $hook "view_vars"
 * @param string $type View name
 * @param array  $vars View vars
 *
 * @return string
 */
function elgg_vue_mount($hook, $type, $vars, $params) {

	$body = elgg_extract('body', $vars);
	$vars['body'] = elgg_view('vue/app', [
		'body' => $body,
	]);

	return $vars;
}
