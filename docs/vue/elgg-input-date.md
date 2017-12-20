# `<elgg-input-date>`

See `elgg-input` docs for a full list of props

## Props

|Property       |Type          |Default       |Required      |Description                                                    |
|---------------|--------------|--------------|--------------|---------------------------------------------------------------|
|`options`      |String        |--            |no            | Options to pass to jQuery UI Datepicker                        |
|`is-timestamp` |Boolean       |--            |no            | Use timestamp value instead of the string date representation |

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
<elgg-input-date
    v-model="parent.value"
    @input="doSomething"
    :options="{
       minDate: '-1year'
    }"
/>
```
