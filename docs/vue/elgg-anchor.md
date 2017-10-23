# `<elgg-anchor>`

## Custom Props

 * `text`
 * `href`
 * `title`
 * `confirm`
 * `is-action`
 * `is-trusted`
 * `excerpt-length`
 * `icon`
 * `badge`
  
## Usage

```html
<elgg-anchor
    text="Click me"
    href="http://example.com"
    title="Tooltip"
    confirm="Confirmation text"
    :is-trusted="false"
    :is-action="false"
    :excerpt-length="100"
    icon="world"
    badge="25"
    @click="onClickMethod"
>
    
    <span>slot</span>
    <span>slot</span>
    <span>slot</span>
    
</elgg-anchor>
```

