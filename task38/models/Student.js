const mongoose=require('mongoose')

const studentSchema = new mongoose.Schema({
    name:String,
    cMentor:{type:mongoose.Schema.Types.ObjectId,ref:"Mentor"},
    pMentor:[{type:mongoose.Schema.Types.ObjectId,ref:"Mentor"}],
});


module.exports = mongoose.model('Student', studentSchema);
