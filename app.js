'use strict';
require('babel/register');
const request = require('request');
const B = require('baconjs')
const _ = require('lodash')

const reqStream = B.fromNodeCallback(request,'http://hearthstonejson.com/json/AllSets.json')
reqStream.map((res) => {
  return JSON.parse(res.body)
})
.onValue((v) => {
  const values = _.chain(v)
                    .values()
                    .flatten()
                    .value()
  console.log(values)
  console.log(values.length)
  //console.log(JSON.stringify(v, null, 4))
})

reqStream.onError((error) => {
  console.error(error)
})
