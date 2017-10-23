# `<elgg-input-text>`

## Props

 * `name` - input name
 * `id` - input ID
 * `label` - field label
 * `help` - field help text
 * `placeholder` - input placeholder
 * `required` - is input required
 * `loading` - show loading spinner
 * `color` - input color (e.g. `danger`)
 * `size` - input size (e.g. `large`)
 * `left-icon` - left icon
 * `right-icon` - right icon
  
## Usage

```html
<elgg-input-text
    v-model="value"
    id="id"
    name="name"
    :label="echo('label')"
    :help="echo('help')"
    :placeholder="echo('placeholder')"
    required
    color="primary"
    size="large"
    left-icon="search"
    right-icon="check"
    :loading="true"
    @input="onInputMethod"
></elgg-list>
```

