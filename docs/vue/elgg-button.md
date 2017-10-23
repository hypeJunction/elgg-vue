# `<elgg-button>`

## Props

 * `tag` - `a`, `button`, `input`
 * `icon` - icon name
 * `html` - button text/html
 * `size` - size
 * `color` - color (e.g. `danger`)
 * `state` - state (e.g. `selected`)
 * `loading` - show loading spinner
 * `outlined` - is outlined
 * `disabled` - is disabled
 * `static` - is static
 
## Usage

```html
<elgg-button
    icon="times"
    html="Delete"
    color="danger"
    size="small"
    state="active"
    :loading="true"
    :outlined="true"
    :disabled="true"
    :static="true"
    @click="onClickMethod"
>
    
    <span>slot</span>
    <span>slot</span>
    <span>slot</span>
    
</elgg-button>
```

