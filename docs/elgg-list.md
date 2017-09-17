# `<elgg-list>`

## Props

 * `data-source` - Current value
 * `data-limit` - Number of items per page
 * `data-offset` - Offset
 * `data-pagination` - Show pagination
 * `data-item-view` - Optional component name to use to render items
 * `data-no-results` - Text to display when list is empty
 
## Usage

```html
<elgg-list
    data-source="/data/blog?owner_guid=32"
    data-limit="10"
    data-offset="0"
    data-pagination="true"
    data-item-view="my-blog"
></elgg-list>
```

