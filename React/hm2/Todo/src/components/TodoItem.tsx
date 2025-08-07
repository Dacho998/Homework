interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onFinish: (id: number) => void;
}

export const TodoItem = ({ todo, onFinish }: TodoItemProps) => {
  return (
    <li
      className={`todo-card ${todo.isDone ? "done" : ""}`}
    >
      <span>{todo.description}</span>
      {!todo.isDone && (
        <button className="finish-btn" onClick={() => onFinish(todo.id)}>
          FINISH
        </button>
      )}
    </li>
  );
};
