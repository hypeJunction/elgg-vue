# `<elgg-input-$type>`

These properties and events apply to all input components extending base input.

## Props

|Property      |Type          |Default        |Required      |Description                                               |
|--------------|--------------|--------------|--------------|-----------------------------------------------------------|
|`name`        |String        |``            |no            |Name of the form input                                     |
|`color`       |String        |``            |no            |Color name. Adds `is-$color` CSS selector to input element |
|`size`        |String        |``            |no            |Input size. Adds `is-$size` CSS selector to input element  |
|`required`    |Boolean       |`false`       |no            |Adds `required` attribute                                  |
|`id`          |String        |``            |no            |Adds `id` attribute                                        |
|`inputClass`  |String        |``            |no            |Additional classes of the input element                    |
|`controlClass`|String        |``            |no            |Additional classes of the control element                  |
|`fieldClass`  |String        |``            |no            |Additional classes of the field element                    |
|`label`       |String        |``            |no            |Label text                                                 |
|`help`        |String        |``            |no            |Help text                                                  |
|`error`       |String        |``            |no            |Validation error text                                                  |
|`placeholder` |String        |``            |no            |Placeholder text                                           |
|`leftIcon`    |String        |``            |no            |Name of the left icon                                      |
|`rightIcon`   |String        |``            |no            |Name of the right icon                                     |
|`loading`     |String        |``            |no            |Adds `is-loading` class                                    |
|`states`      |Object        |`{}`          |no            |An object defining states { active: true }                 |

## Events

|Event                         |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`@input(value)`               |Fired when input value is updated                                    |
