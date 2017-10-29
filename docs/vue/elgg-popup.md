# `<elgg-popup>`

## Props

|Property      |Type          |Defaut        |Required      |Description                          |
|--------------|--------------|--------------|--------------|-------------------------------------|
|`:options`    |Object        |`{}`          |no            |Tether options. See http://tether.io/|
|`:hash`       |String        |``            |no            |When mutated, will reposition the popup relative to trigger|

## Events

|Event                         |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`@open(self)`                 |Fired when popup is opn                                              |
|`@load(self)`                 |Fired when popup is closed                                           |

## Named Slots

Component has no named slots. All slots will be used as popup body.

## Example

```html
<!-- 
Popup MUST be used in a combination with a v-popup directive on a trigger 
Argument of the directive should correspond to the ref attribute of the popup component
-->
<a v-popup:my-popup>Open Popup</a>

<elgg-popup 
    ref="my-popup" 
    :options="{attachment: 'middle center', targetAttachment: 'middle center'}"
    @close="onCloseMethod"
>
    <div>Popup Content</div>
    <div>More Content</div>
    <div>More Content</div>
</elgg-popup>
```