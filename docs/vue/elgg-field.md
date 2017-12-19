# `<elgg-field>`

## Props

|Property      |Type          |Default       |Required      |Description                                                      |
|--------------|--------------|--------------|--------------|-----------------------------------------------------------------|
|`id`          |String        |``            |no            |ID of the input element (use to render `labels)                  |
|`required`    |Boolean       |`false`       |no            |Is input element required. Used to render label and field classes|
|`label`       |String        |``            |no            |Label text                                                       |
|`help`        |String        |``            |no            |Help text                                                        |
|`error`       |String        |``            |no            |Validate error text                                                        |

## Events

|Event                         |Description                                                          |
|------------------------------|---------------------------------------------------------------------|


## Named Slots

|Slot name                     |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`before`                      |Adds an element before the label                                     |
|`label`                       |Replaces default label element                                       |
|`control`                     |Adds a control/input element                                         |
|`help`                        |Replaces default help element                                        |
|`after`                       |Adds an element after the help                                       |

## Example

```html
<elgg-field :id="id" :required="true" :label="label" :help="help">
    <input slot="control" :id="id" :required="required">
</elgg-field>
```