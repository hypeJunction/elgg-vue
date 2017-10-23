# `<elgg-menu>`

## Props

 * `name` - menu name
 * `sections` - menu sections with items
 
## Usage

```html
<elgg-menu
    name="entity"
    :sections="{
        default: [
           {
               name: 'edit',
               href: '/edit',
               text: 'Edit',
               // other options passed to elgg-menu-item component
           }
        ]
    }"
>
</elgg-menu>
```

