import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    nombre_iniciativa:{
        type:String,
        required: true,
    },
    objetivo_iniciativa:{
        type:String,
    },
    institucion_encargada:{
        type:String,
    },
    pais:{
        type:String,
    },},
    {
        timestamps: true
});

export default mongoose.model("Task",taskSchema);