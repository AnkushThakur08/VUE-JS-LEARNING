export interface ITodo {
    _id: string
    title: string;
    description: string
    isComplete: boolean

}

export interface ITimeStamps {
    createdAt: string
    updatedAt: string
}

export interface IPagination extends ITimeStamps {
    limit: number;
    skip: number;
    total: number;
}

export interface ITodoResponse extends IPagination {
    todos: ITodo[]
}