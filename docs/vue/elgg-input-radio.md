# `<elgg-input-radio>`

See `elgg-input` docs for a full list of props

## Props

|Property      |Type          |Default       |Required      |Description                                                    |
|--------------|--------------|--------------|--------------|---------------------------------------------------------------|
|`options`     |String        |--            |yes           |An array of select options ``{value: 'value', label: 'label' }``   |

`options` can contain names of slots instead of labels, in which case a slot will be rendered instead of the label.

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
<elgg-input-radio
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

<elgg-input-radio
	:options="[
           {
              value: 'option1',
              slot: 'slot1'
           },
           {
              value: 'option2',
              slot: 'slot2'
           },
        ]"
>
	<img slot="slot1" src="">
	<img slot="slot2" src="">
</elgg-input-radio>
```
