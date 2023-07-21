# AlpineJS SPA

A simple sample [alpinejs](https://github.com/alpinejs/alpine) structured html files with [alpinejs-router](https://github.com/shaunlee/alpinejs-router) and [tailwind atlas theme](https://www.tailwindawesome.com/resources/atlas) working like a SPA.

## Structure:
|No |Folder           |Description|
|---|-----------------|-----------|
| 1 |```/components```| - components dir to inject html via ajax request|
| 2 |```/pages```     | - pages dir for content in html|
| 3 |```/partials```  | - partial elements dir for separate html sections like header, footer, etc.|

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
- ```x-include``` - lets include files from file
  - ```components``` dir as html,
  - ```content``` dir with ```.markdown``` modifier as parsed markdown to html,
  - ```json``` dir with ```.json``` modifier as parsed & stringify json,
