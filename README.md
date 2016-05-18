# Read me

Really tinyshiny module to strip CDATA wrappers (`<![CDATA[` ... `]]>`).

## Installation

```
npm install strip-cdata
```

## Usage

```javascript
var strip_cdata = require('strip-cdata');
strip_cdata('<![CDATA[<iframe width="100%" height="400" scrolling="no" frameborder="no" src="..."></iframe>]]>')
```