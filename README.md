# vue-el

> Take control of dom nodes in Vue.js

## Download
Currently only available via Component or Browserify. For other use cases just take a look at the source. It's really simple.

### Component
```
component install vue-el
```
### Browserify
```
npm install vue-el
```

## Use with Vue.js
``` js
var vueEl = require('vue-el')
Vue.use(vueEl)
```

## Usage

### Register a DOM node
``` html
<canvas v-el="experiment"></canvas>
```

### Use the reference in your Vue Model
``` js
var canvas = this.$$.experiment;
var ctx    = canvas.getContext('2d');
```

### Use from parent vm
``` html
<div class="container" v-if="isModuleVisible" v-ref="module">
  <canvas v-el="experiment"></canvas>
</div>
```

```
this.$.module.$$.experiment
```

## Example
To build the example, you need to have Browserify installed and then `npm run build`.

## License

MIT