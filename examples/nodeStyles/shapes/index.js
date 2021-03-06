/* global vis */

/* eslint-disable */
function draw() {
  /* eslint-enable */
  let nodes = [
    { id: 1, label: 'circle', shape: 'circle' },
    { id: 2, label: 'ellipse', shape: 'ellipse' },
    { id: 3, label: 'database', shape: 'database' },
    { id: 4, label: 'box', shape: 'box' },
    { id: 5, label: 'diamond', shape: 'diamond' },
    { id: 6, label: 'dot', shape: 'dot' },
    { id: 7, label: 'square', shape: 'square' },
    { id: 8, label: 'triangle', shape: 'triangle' },
    { id: 9, label: 'triangleDown', shape: 'triangleDown' },
    { id: 10, label: 'text', shape: 'text' },
    { id: 11, label: 'star', shape: 'star' },
    { id: 12, label: 'hexagon', shape: 'hexagon' },
    { id: 21, font: { size: 30 }, label: 'big circle', shape: 'circle' },
    { id: 22, font: { size: 30 }, label: 'big ellipse', shape: 'ellipse' },
    {
      id: 23,
      font: { size: 30 },
      label: 'ellipse with a long label text',
      shape: 'ellipse'
    },
    { id: 24, font: { size: 30 }, label: 'big database', shape: 'database' },
    { id: 25, font: { size: 30 }, label: 'big box', shape: 'box' },
    {
      id: 26,
      font: { size: 30 },
      size: 40,
      label: 'big diamond',
      shape: 'diamond'
    },
    { id: 27, font: { size: 30 }, size: 40, label: 'big dot', shape: 'dot' },
    {
      id: 28,
      font: { size: 30 },
      size: 40,
      label: 'big square',
      shape: 'square'
    },
    {
      id: 29,
      font: { size: 30 },
      size: 40,
      label: 'big triangle',
      shape: 'triangle'
    },
    {
      id: 30,
      font: { size: 30 },
      size: 40,
      label: 'big triangleDown',
      shape: 'triangleDown'
    },
    { id: 31, font: { size: 30 }, label: 'big text', shape: 'text' },
    { id: 32, font: { size: 30 }, size: 40, label: 'big star', shape: 'star' },
    {
      id: 33,
      font: { size: 30 },
      size: 40,
      label: 'big hexagon',
      shape: 'hexagon'
    },
    {
      id: 34,
      font: { size: 30 },
      label: 'icon square',
      shape: 'square',
      icon: { code: '\uf164' }
    },
    {
      id: 35,
      font: { size: 30 },
      label: 'icon dot',
      shape: 'dot',
      icon: { code: '\uf165' }
    }
  ]

  let edges = []

  // create a network
  var container = document.getElementById('mynetwork')
  var data = {
    nodes: nodes,
    edges: edges
  }
  var options = { physics: { barnesHut: { gravitationalConstant: -4000 } } }
  new vis.Network(container, data, options)
}
