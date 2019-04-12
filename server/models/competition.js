const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    competitionName:    { type: String, required: true },
    competitionLogo:    { type: String, default: null, lowercase: true, trim: true },
    tropheyPhoto:       { type: String, default: null, lowercase: true, trim: true },
    createdAt:          { type: Date, default: Date.now() }
});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition