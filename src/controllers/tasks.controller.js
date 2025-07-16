import Task from '../models/tasks.model.js';


export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: "algo va mal" });

    }
};

export const createTask = async (req, res) => {
    try {
        const { nombre_iniciativa, objetivo_iniciativa, institucion_encargada, pais } = req.body;

        const newTask = new Task({
            nombre_iniciativa,
            objetivo_iniciativa,
            institucion_encargada,
            pais,
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({ message: "algo va mal" });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) return res.status(404).json({ message: "task not found" })
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: "task not found" })
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({ message: "task not found" })
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "task not found" })
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!task) return res.status(404).json({ message: "task not found" })
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: "task not found" })
    }
};

// export const loadForm1 = async (req, res) =>  {
// try {
//         const {nombre_iniciativa, objetivo_iniciativa, institucion_encargada, pais} = req.body;

//     const newTask = new Task({
//         nombre_iniciativa,
//         objetivo_iniciativa,
//         institucion_encargada,
//         pais,
//     });
//     const savedTask = await newTask.save();
//     res.json(savedTask);
//     } catch (error) {
//         return res.status(500).json({message: "algo va mal"});
//     }
// };