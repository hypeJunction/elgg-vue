# `<elgg-input-contenteditable>`

See `elgg-input` docs for a full list of props

## Props

|Property      |Type          |Default        |Required      |Description                                               |
|--------------|--------------|--------------|--------------|-----------------------------------------------------------|
|`component`   |String        |`div`         |no            |Component name to use for `contenteditable`                |

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
<elgg-input-contenteditable
    v-model="parent.value"
    @input="doSomething"
/>
```