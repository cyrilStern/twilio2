// Router.route('/token', { where: 'server' })
//   .get(function () {
//         const client = require('twilio');
//         var capability = new client.Capability(
//         'ACf93aee23b76e63f4c64ff03c53fb5568',
//         'a923874165230c0201e6fae93853c3d2'
//         );
//         capability.allowClientOutgoing('AP1c32a67f356dad5ab6cd97d3b4a1cbc6');
//         capability.allowClientIncoming("support_agent");
//         var token = capability.generate();
//         this.response.statusCode = 200;
//         this.response.end( token );
//
//     })
//     .post(function (req, res) {
//
//     })
//     .put(function () {
//     })
