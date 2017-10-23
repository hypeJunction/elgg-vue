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
            require(['elgg/Vue', 'elgg/VueComponents', 'elgg/VueStorage'], function (Vue, Components, Storage) {
                elgg.vue = elgg.vue || {};
                elgg.vue.apps = elgg.vue.apps || {};

                elgg.vue.apps[<?= json_encode($id) ?>] = new Vue({
                    'el': '#<?= $id ?>',
                    store: Storage,
                    created: function () {
                        if (elgg.data.context.user) {
                            this.$store.commit('setEntity', {
                                entity: elgg.data.context.user
                            });
                        }
                        if (elgg.data.context.page_owner) {
                            this.$store.commit('setEntity', {
                                entity: elgg.data.context.page_owner
                            });
                        }
                    }
                });
            });
        }, 9999);
    });
</script>
