<?php

$id = elgg_extract('id', $vars, 'elgg-vue-app-' . base_convert(mt_rand(), 10, 36));
$id = ltrim($id, '#');

$body = elgg_extract('body', $vars);

echo elgg_format_element('div', [
	'id' => $id,
], $body);
?>

<script>
    require(['elgg'], function (elgg, Vue) {
        elgg.register_hook_handler('ready', 'system', function () {
            require(['elgg/Vue', 'elgg/VueComponents'], function (Vue) {
                elgg.vue = elgg.vue || {};
                elgg.vue.apps = elgg.vue.apps || {};

                elgg.vue.apps[<?= json_encode($id) ?>] = new Vue({
                    'el': '#<?= $id ?>',
                });
            });
        }, 9999);
    });
</script>
