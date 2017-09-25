# `<elgg-progressbar>`

## Props

 * `data-value` - Current value
 * `data-max` - Max value
 * `data-style` - Style of the progressbar, e.g. setting this to `danger` will add `is-danger` class to the `<progress>` tag
 * `data-text` - Text to appear between `<progress>` tag
 * `data-tootip` - Tooltip to be shown when mouse is over the progressbar
 
## Usage

```html
<elgg-progressbar
    :data-value="0" 
    :data-max="100"
    data-style="primary"
    :data-text="echo('text')"
    :data-tooltip="echo('tooltip')"
></elgg-progressbar>
```

