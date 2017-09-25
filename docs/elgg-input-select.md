# `<elgg-input-select>`

## Props

 * `data-options` - select options
 * `data-name` - input name
 * `data-id` - input ID
 * `data-label` - field label
 * `data-help` - field help text
 * `data-placeholder` - input placeholder
 * `data-required` - is input required
 * `data-style` - input style (e.g. `danger`)
 * `data-size` - input size (e.g. `large`)
  
## Usage

```html
<elgg-input-text
    v-model="value"
    :data-options="[
    {
       value: 'option1',
       label: 'Option Label 1'
    },
    {
       value: 'option2',
       label: 'Option Label 2'
    },
    ]"
    data-id="id"
    data-name="name"
    :data-label="echo('label')"
    :data-help="echo('help')"
    :data-placeholder="echo('placeholder')"
    data-required
    data-style="primary"
    data-size="large"
    @input="onInputMethod"
></elgg-list>
```

