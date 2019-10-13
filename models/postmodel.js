var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    loginId: { type: String },
    title: { type: String, require: true },
    body1: { type: String, require: true },
    // tag: { type: String, enum: ['TECH', 'POLITICS', 'GOVERNMENT'] },
    creation_dt: { type: Date, require: true },
    category: { type: String ,require: true},
});

module.exports = mongoose.model('PostModel', PostSchema);