import fetch from 'cross-fetch';

interface Todo {
    id: number;
    title: string;
  }
  
  async function getTodos(): Promise<Todo[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[] = await response.json();
    return todos;
  }
  
  function printTodos(todos: Todo[]): void {
    const formattedTodos = todos.map(todo => ({ id: todo.id, title: todo.title }));
    console.log(formattedTodos);
  }
  
  async function fetchDataAndPrintTodos() {
    try {
      const todos = await getTodos();
      printTodos(todos);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchDataAndPrintTodos();