export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
  todoStatus: "pending" | "complete" | "all";
  isDeleted: boolean;
}
