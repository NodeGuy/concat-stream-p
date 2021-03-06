var
  stream = require('stream'),
  concat = require('../lib'),
  test = require('tape')

test('promise', function (t) {
  t.plan(2)
  var strings = concat({ encoding: 'string' })

  strings.then(function(out) {
    t.equal(typeof out, 'string')
    t.equal(out, 'nacho dogs')
  })

  strings.write("nacho ")
  strings.write("dogs")
  strings.end()
})

test('promise with pipe', function (t) {
  t.plan(2)
  var strings = stream.PassThrough()

  strings.pipe(concat({ encoding: 'string' })).then(function(out) {
    t.equal(typeof out, 'string')
    t.equal(out, 'nacho dogs')
  })
  
  strings.write("nacho ")
  strings.write("dogs")
  strings.end()
})

test("then function returns a promise", function (t) {
  t.plan(2)
  var strings = stream.PassThrough()

  strings.pipe(concat({encoding: 'string'}))
  .then(function (out) {
    return out;
  })
  .then(function (out) {
    t.equal(typeof out, 'string')
    t.equal(out, 'nacho dogs')
  })

  strings.write("nacho ")
  strings.write("dogs")
  strings.end()
});
