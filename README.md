# AlpineJS SPA

A simple sample [alpinejs](https://github.com/alpinejs/alpine) structured html files with [alpinejs-router](https://github.com/shaunlee/alpinejs-router) and [tailwind atlas theme](https://www.tailwindawesome.com/resources/atlas) working like a SPA.

## Structure:
|No |Folder            |Description|
|---|------------------|-----------|
| 1 |```/components/```| - components dir to keep html files and inject it's contenten via x-include directive|
| 1 |```/content/```   | - content dir for markdown files to parse and inject as html via x-include.markdown directive|
| 2 |```/json/```      | - json dir for json files|
| 2 |```/pages/```     | - pages dir for content in html|
| 3 |```/partials/```  | - partial elements dir for separate html sections like header, footer, etc.|

# Router templates
```html
<a x-link href="/hello/world">Hello World</a>

<a x-link href="/somewhere">Load template</a>

<template x-route="/hello/:name">
  <!-- Inner template -->
  <div>Say hello to <span x-text="$router.params.name"></span></div>
</template>

<!-- Separate template file -->
<template x-route="/somewhere" template="/somewhere.html"></template>
```

## Custom directive:
- ```x-include``` - lets include files from file and inject response inside directive's element
  - default without modifier returns file content as text/html,
  - ```.markdown``` modifier to parse markdown file to html,
  -  ```.json``` modifier to parse json files to json,
