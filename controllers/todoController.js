import ToDoModel from '../model/Todo.js'


const addToDo = async (req,res) => {
    try{
        const newTodo = await ToDoModel.create({
            data: req.body.data,
            createAt: Date.now()
        })
        await newTodo.save();
      return res.status(200).json(newTodo)
    }catch(error){
        return res.status(500).json(error.message)
    }
}
export {addToDo};