# `v-tooltip` Directive

## Example

```html
<a v-tooltip:my-tooltip>Has tooltip</a>

<div ref="my-tooltip" hidden>
    <div>HTML Content</div>
</div>
```

```html
<a v-tooltip="{
   theme: 'tooltip-theme-custom',
   position: 'bottom right',
   content: 'Tooltip content'
}">Has tooltip</a>
```