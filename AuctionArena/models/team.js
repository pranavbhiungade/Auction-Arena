const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: String,
    password:String,
    confirmPassword:String,
    role:{type:String ,default:"team"},
    budget: {type:Number,default:100000},
    purchasedCompanies: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }], default: [] },
});

module.exports = mongoose.model("Team",teamSchema);

// 668ecb7217595395ae180086 John Doe -> team