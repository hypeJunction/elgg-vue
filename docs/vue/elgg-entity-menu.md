# `<elgg-entity-menu>`

## Props

 * `entity` - **[required]** entity  
 
## Named slots

 * `trigger` - Element used to trigger popup
 
## Events

 * `open`
 * `close`
 
## Usage

```html
<elgg-entity-menu
    :entity="{}"
    @open="onOpenMethod"
    @close="onCloseMethod"
>
    <elgg-icon slot="trigger" name="chevron-down" />
    <div>Goes into popup</div>
</elgg-icon>
```

