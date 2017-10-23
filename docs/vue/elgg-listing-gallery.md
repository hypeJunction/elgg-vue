# `<elgg-listing-gallery>`

## Props

 * `items` - **[required]** An array of items
 * `options` - List rendering options
 
## Usage

```html
<elgg-listing-gallery
    :items="[]"
    :options="{
       class: ['custom-css-class'],
       item: {
          component: 'custom-item-component-name',
          class: ['custom-item-css-class']
       }
    }"
></elgg-listing-gallery>
```

