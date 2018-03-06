require('./../config/config')
var { mongoose } = require('./../db/mongoose');
//var mongoDB = require('mongodb');

var Pen = mongoose.model('pin', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    },
  });

  var pen = new Pen({
      text: 'req.body.text',
    }
  )

  pen.save().then((user) => {
    console.log('successful');
    console.log(typeof user);
    console.log(user);
  }).catch(e => {
    console.log('not');
  })

  module.exports = {Pen};