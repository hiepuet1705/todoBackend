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
        }).sort({createdAt:-1})
        
        return res.status(200).json(allToDos)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}
export { addToDo,gettAllToDos};