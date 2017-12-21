# `<elgg-input-location>`

See `elgg-input` docs for a full list of props

Uses Google Maps Autocomplete if available.

## Props

|Property       |Type          |Default       |Required      |Description                                                    |
|---------------|--------------|--------------|--------------|---------------------------------------------------------------|
|`options`      |Object        |--            |no            | Options to pass to Google Maps Autocomplete                   |

## Events

|Event                         |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`@input(value)`               |Fired when input value is updated                                    |
|`@geocode(parts)`             |Fired when inptu value has been geocoded                             |


## Named Slots

|Slot name                     |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`input`                       |Replaces input element                                               |

## Example

```html
<elgg-input-location
    v-model="parent.value"
    @input="doSomething"
    :options="{
        types: ['establishment']
    }"
/>
```
