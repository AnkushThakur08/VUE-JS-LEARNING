export type TodoStatus = "DONE" | "INPROGRESS" | "PENDING" 


export interface ITodo {
    id: string
    title: string,
    todoStatus: TodoStatus,
    isDeleted: boolean
}