# concat-stream-p

[concat-stream](https://github.com/maxogden/concat-stream) is [commitment-phobic](https://github.com/maxogden/concat-stream/pull/40) so I made a promise interface wrapper which accepts all of concat-stream's options.  See [its documentation](https://github.com/NodeGuy/concat-stream/blob/master/readme.md) first.

## Installation

`npm install concat-stream-p`

## Example

```JavaScript
var fs = require('fs')
var concat = require('concat-stream-p')

var readStream = fs.createReadStream('cat.png')

readStream.on('error', handleError)

readStream.pipe(concat()).then(function (imageBuffer) {
  // imageBuffer is all of `cat.png` as a node.js Buffer
})

function handleError(err) {
  // handle your error appropriately here, e.g.:
  console.error(err) // print the error to STDERR
  process.exit(1) // exit program with non-zero exit code
}
```

## Interface

```js
var concat = require('concat-stream-p')
```

### concat(options = {})

Returns a `stream.Writable` that's also a promise of all of the data that
was written to the stream.
