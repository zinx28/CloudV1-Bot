const mongooes = require('mongoose');

const data101 = mongooes.Schema({
    id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    vbucks: {
        type: Number,
       default: 1653
    },
    mtxplatform: {
        type: String,
        default: "EpicPC"
    },
    gifts: {
        type: Array,
        default: []
    },
    //userid: {
   //     type: String,
  //      default: []
 //   },
       // createdAt: Date,
   // vbucks: String,
  //  mtxplatform: String,
    //id: String,
    userId: String
})

module.exports = mongooes.model("commoncores", data101);
