# `<elgg-table>`

## Custom Props

* `rows` - An of objects to use as rows
* `columns` - An array of column properties

## Usage

```html
<elgg-table
    :rows="[{
        class: 'custom-css-classes'
    }, {}]"
    <!-- 
    each column is rendered using <elgg-component> component,
    so you can pass the props accordingly, where as data is the current row 
     -->
    :columns="[{  
        heading: '',
        component: 'custom-cell-component',
        props: {
           first_name: 'data.first_name',
           child: 'data',
           parent: 'data.parent'
        },
    },
    {
        heading: 'Name',
        html: function(row) {
           return '<div>' + row.name + '</div>',
        }
    }]"
    
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

