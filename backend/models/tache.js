var mongoose = require('mongoose');

var tacheSchema = new mongoose.Schema({
  
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    catégories: {
        type: String,
        required: true,
    },
    priorité: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

var tacheModel = mongoose.model('tache', tacheSchema);
module.exports = tacheModel;
