# `<elgg-progressbar>`

## Props

 * `value` - Current value
 * `max` - Max value
 * `color` - Style of the progressbar, e.g. setting this to `danger` will add `is-danger` class to the `<progress>` tag
 * `text` - Text to appear between `<progress>` tag
 * `tootip` - Tooltip to be shown when mouse is over the progressbar
 
## Usage

```html
<elgg-progressbar
    :value="0" 
    :max="100"
    color="primary"
    :text="echo('text')"
    :tooltip="echo('tooltip')"
></elgg-progressbar>
```

