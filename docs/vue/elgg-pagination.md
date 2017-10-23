# `<elgg-pagination>`

## Props

 * `count` - **[required]** total count of items in the list
 * `limit` - **[required]** number of tiems per page
 * `offset` - **[required]** offset of the current page
 
## Usage

```html
<elgg-pagination
    :count="150"
    :limit="20"
    :offset="0"
    @navigate="onNavigateMethod"
></elgg-pagination>
```

