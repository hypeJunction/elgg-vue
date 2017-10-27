# `<elgg-table>`

## Custom Props

* `rows` - An array of objects to use as rows
* `columns` - An array of column properties

## Usage

```html
<elgg-table
    :rows="[{
        class: 'custom-css-classes'
    }, {}]"
    <!-- 
    each column is rendered using <elgg-component> component,
    so you can pass the props accordingly, where 'data' is the current row
    The function call below is for illustrative purposes only,
    you can't use it in XML bindings 
     -->
    :columns="[{  
        heading: 'Column as component with props mapping',
        component: 'custom-cell-component',
        props: {
           first_name: 'data.first_name',
           child: 'data',
           parent: 'data.parent'
        },
    },
    {
        heading: 'Column as component with html',
        html: function(row) {
           return '<div>' + row.foo + '</div>',
        },
    },
        heading: 'Column as object prop',
        name: 'foo'
    ]"
    
     <!-- automatically bind item selection -->
     v-model="guids"
     @select="onSelectMethod"
        
     <!-- add selection UI -->
     :selectable="true"
        
     <!-- add a hidden checkbox -->
     input-name="ids[]"
     input-prop="uid" <!-- maps input value to row.uid -->
     
></elgg-table>
```

