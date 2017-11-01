# `<elgg-input-select>`

See `elgg-input` docs for a full list of props

## Props

|Property      |Type          |Default       |Required      |Description                                                    |
|--------------|--------------|--------------|--------------|---------------------------------------------------------------|
|`options`     |String        |--            |yes           |An array of select options {value: 'value', label: 'label' }   |

## Events

|Event                         |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`@input(value)`               |Fired when input value is updated                                    |

## Named Slots

|Slot name                     |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`input`                       |Replaces input element                                               |

## Example

```html
<elgg-input-select
    v-model="parent.value"
    @input="doSomething"
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
/>
```
