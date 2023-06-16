import ToDoModel from '../model/Todo.js'

const addToDo = async (req, res) => {
    try {
        const newTodo = await ToDoModel.create({
            data: req.body.data,
            createAt: Date.now()
        })
        await newTodo.save();
        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const gettAllToDos = async (req, res) => {
    try {
        // Lấy ra tất cả todo và sắp xếp theo thức tự mới nhất lên đầu
        const allToDos = await ToDoModel.find({
        }).sort({ createdAt: -1 })

        return res.status(200).json(allToDos)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}
const toggleToDoDone = async (req, res) => {
    try {
        console.log("Toggle API",req.body)
        // Lấy ra tất cả todo và sắp xếp theo thức tự mới nhất lên đầu
        const todoRef = await ToDoModel.findById(req.params.id)
        const todo = await ToDoModel.findByIdAndUpdate({_id:req.params.id},{done:!todoRef.done})
        await todo.save();
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const updateTodo = async (req,res) => {
    try {
        console.log('BackEnd ....',req.body)
        await ToDoModel.findOneAndUpdate({_id:req.params.id},{data:req.body.data})

        // ko can save vi update already save
        // await todo.save();
        // tra ve cho frontend
        const todo = await ToDoModel.findById(req.params.id)
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const deleteTodo = async (req,res) => {
    try {
        const todo =   await ToDoModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export { addToDo, gettAllToDos, toggleToDoDone,updateTodo,deleteTodo };