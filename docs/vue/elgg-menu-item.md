# `<elgg-menu-item>`

## Props

 * `item` - menu item

You can specify custom component name to be used when rendering the menu item. This can be helpful, e.g. when you need render something other than just a simple link: likes component would such an example.

## Usage

```html
<elgg-menu-item
    :item="{
        component: 'custom-item-component',
        name: 'download',
        text: 'Download'
        href: '/download/path',
        title: false,
        confirm: '',
        icon: 'download',
        badge: null,
        priority: 100,
        selected: false,
        itemClass: 'elgg-menu-item-download',
        linkClass: '',
        parent: '',
        children: []
    }"
>
</elgg-menu-item>
```

