<?php

if (elgg_get_config('environment') !== 'development') {
	$env = 'prod';
} else {
	$env = 'dev';
}

return [
	'default' => [
		'/' => __DIR__ . "/assets/$env/",
	]
];