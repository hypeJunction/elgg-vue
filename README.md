# vue for Elgg

![Elgg 2.3](https://img.shields.io/badge/Elgg-2.3-orange.svg?style=flat-square)

## Features

* Bootstraps vue.js and allows plugins to register and load their components asynchronously
* Provides some components mirroring the behavior of core Elgg elements

## Debugging

Add `environment` declaration to your `settings.php` (and flush caches):

```php
$CONFIG->environment = 'development';
```

This will enable Vue.js devtools and you can use Chrome extension to debug your Vue instances.

## Vue Components

### Core Components

This plugins ships with a number of Vue components, which you can start using in your project.

See `/docs/` directory for a list of components and usage examples.

### Bundled Third-Party Components

The plugin comes with some useful Vue components precompiled with webpack.

* ***Multiselect*** https://monterail.github.io/vue-multiselect


### Global Components

To define a global component, give your component file a `.vue.js` extension

```js
/**
 * Example component
 * demo/hello-world.vue.js
 */
define(function(require) {
    var Vue = require('elgg/Vue');

    Vue.component('hello-world', {
        template: '<h1><elgg-icon type="bell"></elgg-icon>Hello, {{ name }}!</h1>',
        data: function() {
            return {
                name: elgg.get_logged_in_user_entity().name || elgg.echo('Guest')
            }
        }
    });
});
```

The components will be inlined in `elgg.js` and will be available globally.

You can also use require text plugin to load the templates: `require('text!demo/hello-world.vue.html')`. When the components are inlined in `elgg.js`, the templates will also be inlined within your modules.

### On-Demand Components

You an use on-demand components like any other AMD module. You just need to ensure that the module is loaded before `init`, `system` hook is fired. 

## Vue Application

By default, the entire `body` of all HTML pages is wrapped in a vue container div, so you can just include your component tags anywhere in the views. This does not hold true, however, for views loaded via XHR (yet).

To bootstrap a new app elsewhere, you can use the convenience `vue/app` view:

```php
echo elgg_view('vue/app', [
   'body' => '<hello-world></hello-world>',
   'id' => 'my-hello-world',
]);
```

You can then access Vue instances using:
```js
define(function(require) {
    var elgg = require('elgg');
    
    var App = elgg.vue.apps['my-hello-world'];
});
```

## Styles

Included components are styled using bulma.io, which is not included in this plugin.
You can either include the stylesheet into your theme, or use hypeUI.

## Mixins

The following `elgg.` methods are proxied via mixins and can be used in templates:

* `echo()`

Additional convienience methods:

* `emit('event-name', {foo: 'bar'})` - will emit an event to parent component


## Transitions

The plugins uses Animated Vue plugin, so you can use any transitions components included therein:
https://github.com/radical-dreamers/animated-vue

You will need to add animate.css classes to your theme:
https://github.com/daneden/animate.css


