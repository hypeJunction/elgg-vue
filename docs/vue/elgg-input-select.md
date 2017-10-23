# `<elgg-input-select>`

## Props

 * `options` - **[required]** select options
 * `name` - input name
 * `id` - input ID
 * `label` - field label
 * `help` - field help text
 * `placeholder` - input placeholder
 * `required` - is input required
 * `color` - input color (e.g. `danger`)
 * `size` - input size (e.g. `large`)
  
## Usage

```html
<elgg-input-select
    v-model="value"
    :options="[
    {
       value: 'option1',
       label: 'Option Label 1'
    },
    {
       value: 'option2',
       label: 'Option Label 2'
    },
    ]"
    id="id"
    name="name"
    :label="echo('label')"
    :help="echo('help')"
    :placeholder="echo('placeholder')"
    required
    color="primary"
    size="large"
    @input="onInputMethod"
></elgg-input-select>
```

