# `<elgg-listing>`

## Props

 * `base-url` - **[required]** Base URL to fetch the entities from. Must be a valid JSON endpoint
 * `options` - An object representing list options
 * `filter` - List filter options
 * `listing-type` - Default listing type
 * `listing` - List type rendering options
 * `layout` - Layout options
 * `pagination` - Pagination options
 * `no-results` - Text to display when list is empty
 
## Named Slots
 
 * `controls` - additional controls to add to the control bar
 * `before` - shown before the list when it has items
 * `after` - shown after the list when it has items
   
   
## Usage

Note that the base URL should be able to handle `limit` and `offset`, as well as other parameters you will be passing with `options` and `filter` parameters.

For list type specific options
```html
<elgg-listing
    base-url="/data/list"
    :options="{
       types: 'object',
       subtypes: ['blog', 'file'],
       owner_guids: [32, 33],
       container_guids: [31],
       limit: 10,
       offset: 0,
    }"
    :filter="{
       metadata: {
          status: 'published'
       },
       query: 'Search query',
       sort: 'alpha::asc',
    }"
    :listing-type="gallery"
    :listing="{
       list: {
           // config options passed to elgg-listing-list component
       },      
       gallery: {
          // config options passed to elgg-listing-gallery component
       },
       table: {
          // config options passed to elgg-listing-table component
       }
    }"
    :layout="{
       search: true
    }"
    :pagination="{
       display: true,
       position: 'bottom',
    }"
    :no-results="echo('list:no_results')"
    
    <!-- automatically bind item selection -->
    v-model="guids"
    @select="onSelectMethod"
    
    <!-- add selection UI -->
    :selectable="true"
    
    <!-- add a hidden checkbox -->
    input-name="guids[]"
    
></elgg-listing>
```

