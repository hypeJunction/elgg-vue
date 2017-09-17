<?php

/**
 * Inline AMD modules that contain vue components
 */

/**
 * Given the view name, returns the AMD name.
 *
 * @param string $name The name of the view (e.g., 'elgg/module.js')
 *
 * @return string The AMD name (e.g., 'elgg/module'), or blank for no AMD name.
 *
 * @author  Steve Clay
 * @package mrclay_combiner
 * @link    https://github.com/mrclay/Elgg-mrclay_combiner/blob/master/classes/MrClay/AmdViewFilter.php
 */
$get_amd_name = function ($name) {
	if (preg_match('~^(js/)?(.*)\\.js\\z~', $name, $m)) {
		return $m[2];
	}
	$pieces = explode("/", $name); // [js, elgg, module.js]
	if (count($pieces) <= 1 || $pieces[0] != 'js') {
		return '';
	}

	array_shift($pieces); // [elgg, module.js]
	$basename = basename(array_pop($pieces), ".js"); // module
	array_push($pieces, $basename); // [elgg, module]

	return implode("/", $pieces); // elgg/module
};

/**
 * Inserts the AMD name into `$content` and returns the new value.
 *
 * @param string $viewName The name of the view.
 * @param string $content  The output of the view to be filtered.
 *
 * @return string The new content with the AMD name inserted, if applicable.
 *
 * @author  Steve Clay
 * @package mrclay_combiner
 * @link    https://github.com/mrclay/Elgg-mrclay_combiner/blob/master/classes/MrClay/AmdViewFilter.php
 */
$filter = function ($viewName, $content) use ($get_amd_name) {
	$amdName = $get_amd_name($viewName);

	if (!empty($amdName)) {
		$content = preg_replace('/^(\s*)define\(([^\'"])/m', "\${1}define(\"$amdName\", \$2", $content, 1);
	}

	return $content;
};

$inline_html = function($content) {

    $content = preg_replace_callback('/require\(["\']text!(.*)?["\']\);/m', function($matches) {
        return json_encode(elgg_view($matches[1])) . ';' . PHP_EOL;
    }, $content);

    return $content;
};

$deps = [];

$views = _elgg_services()->views->listViews();
foreach ($views as $view) {
	if (substr($view, -7) != '.vue.js') {
		continue;
	}

	$amd_name = $get_amd_name($view);
	$deps[] = $amd_name;

	$content = elgg_view($view);
	$content = $filter($view, $content);
    $content = $inline_html($content);

	echo $content . ";\n";
}

?>

define('elgg/Vue', ['elgg', 'vue'], function (elgg, vuelib) {
    return vuelib;
});

define('elgg/VueComponents', <?= json_encode($deps) ?>, function() {

});

require(['elgg/Vue', 'elgg/VueComponents'], function(Vue) {
    window.Vue = Vue;
    window.Vue.config.devtools = <?= json_encode((elgg_get_config('environment') === 'development')) ?>;
});