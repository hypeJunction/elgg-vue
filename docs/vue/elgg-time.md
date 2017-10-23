# `<elgg-time>`

## Props

 * `timestamp` - **[required]** Timestamp
 * `format` - moment.js compatible format string, `friendly` or `calendar` (defaults to displaying `friendly` time)
 * `icon` - icon to display
  
## Usage

```html
<elgg-time
    :timestamp="1507044919"
    format="dddd, MMMM Do YYYY, H:mm:ss"
    icon="history"
></elgg-time>
```

