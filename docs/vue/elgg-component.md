# `<elgg-component>`

Magic component builder

## Custom Props

|Property Name|Required|Description|
|---|---|---|
|`component`|   |Component name, e.g. `elgg-entity-icon`|
|`props`|   |An object representing mapping of component properties. Allows you to map `data` object properties to component properties, using closures or dot.notations. |
|`data`|   |Data object|
|`html`|   |Row HTML content of the component (closure or string)|

## Usage

```html
<elgg-component
    component="my-component"
    :data="{
       first_name: 'John',
       last_name: 'Doe',
       parent: {
          first_name: 'Jane',
          last_name: 'Doe',
       }
    }",
    :props="{
       first_name: 'data.first_name',
       child: 'data',
       parent: 'data.parent'
    }",
    :html="<div></div>"
>
    
    <span>slot</span>
    <span>slot</span>
    <span>slot</span>
    
</elgg-component>
```

When passing `props` using JavaScript objects, you can use callbacks for prop value resolution:

```javascript
return {
    data: {
        first_name: 'John',
        last_name: 'Doe'
    },
    props: {
        first_name: function(data) {
            return data.first_name;
        },
        parent: function(data) {
            return new Parent(data.parent);
        }
    },
    html: function(data) {
        return '<b>' + data.first_name + '</b>'
    }
}
```
