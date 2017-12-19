# `<elgg-input-text>`

See `elgg-input` docs for a full list of props

## Props

|Property      |Type          |Default       |Required      |Description                                                    |
|--------------|--------------|--------------|--------------|---------------------------------------------------------------|
|`type`        |String        |`text`        |no            |Type of the text input                                         |

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
<elgg-input-text
    v-model="parent.value"
    @input="doSomething"
/>
```
