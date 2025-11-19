import * as fs from 'fs'
import * as xml2json from 'xml2json'

export function getTrack(file) {
  return new Promise((resolve) => {
    fs.readFile('2022/austria_ai_track.aispline.xml', 'utf8', function (err, data) {
      var json = xml2json.toJson(data, { "object": true });
      resolve(json.track)
    })
  })
}

export function getGates(file) {
  return new Promise((resolve) => {
    fs.readFile('2022/austria_ai_track.aispline.xml', 'utf8', function (err, data) {
      var json = xml2json.toJson(data, { "object": true });
      resolve(json.track.gates)
    })
  })
}

    
/*
      console.log(JSON.stringify(json.track.gates.gate[0], null, 2))

      var gates = json.track.gates.gate.map(function (elm) {
        return {
          id: elm.id,
          x: elm.position.x,
          y: elm.position.y,
          z: elm.position.z,
        };
      })

      //console.log(gates)

      var maxX = Math.max.apply(Math, gates.map(function (o) { return o.x; }))
      var maxY = Math.max.apply(Math, gates.map(function (o) { return o.y; }))
      var maxZ = Math.max.apply(Math, gates.map(function (o) { return o.z; }))

      var minX = Math.min.apply(Math, gates.map(function (o) { return o.x; }))
      var minY = Math.min.apply(Math, gates.map(function (o) { return o.y; }))
      var minZ = Math.min.apply(Math, gates.map(function (o) { return o.z; }))

      var dX = maxX - minX
      var dY = maxY - minY
      var dZ = maxZ - minZ

      //console.log(minX,minY,minZ,maxX,maxY,maxZ,dX,dY,dZ)





*/