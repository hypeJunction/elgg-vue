# `<elgg-lightbox>`

Magic component builder

## Props

|Property      |Type          |Defaut        |Required      |Description                          |
|--------------|--------------|--------------|--------------|-------------------------------------|
|`:open`        |Boolean      |`false`       |no            |Open status                          |
|`:options`     |Object       |`{}`          |no            |Colorbox options                     |

## Events

|Event                         |Description                                                          |
|------------------------------|---------------------------------------------------------------------|
|`@open(self)`                 |Fired when colorbox `onOpen` event is fired                          |
|`@load(self)`                 |Fired when colorbox `onLoad` event is fired                          |
|`@complete(self)`             |Fired when colorbox `onComplete` event is fired                      |
|`@cleanup(self)`              |Fired when colorbox `onCleanup` event is fired                       |
|`@close(self)`                |Fired when colorbox `onClose` event is fired                         |

## Named Slots

Component has no named slots. All slots will be used as lightbox body.

## Example

```html
<!-- 
Lightbox can be used in a combination with a v-lightbox directive 
Argument of the directive should correspond to the ref attribute of the lightbox component
-->
<a v-lightbox:my-lightbox>Open Lightbox</a>

<elgg-lightbox 
    ref="my-lightbox" 
    :open="false" 
    :options="{width: 600}"
    @close="onCloseMethod"
>
    <div>Lightbox Content</div>
    <div>More Content</div>
    <div>More Content</div>
</elgg-lightbox>
```