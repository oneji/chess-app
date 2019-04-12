const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    competitionName:    { type: String, required: true, trim: true },
    competitionLogo:    { type: String, default: null, trim: true },
    tropheyPhoto:       { type: String, default: null, trim: true },
    createdAt:          { type: Date, default: Date.now() },
    slug:               { type: String, default: '' }
});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition