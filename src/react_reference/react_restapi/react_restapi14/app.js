import React,{useState,useEffect} from 'react';
import useFetch from 'use-http';
import usePortal from 'react-useportal';
import { useInput, useBoolean, useNumber, useArray, useOnMount, useOnUnmount } from 'react-hanger';

export default function CustomApp() {
  return (
    <div>
        <Example2/>
    </div>
  )
}


function Todos() {
  const [todos, setTodos] = useState([])
  const {get, post, response, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts',
{
   retries: 1,
    retryOn: [305],
    // OR
    retryOn: async ({ attempt, error, response }) => {
      // returns true or false to determine whether to retry
      return error || response && response.status >= 300
    },

    retryDelay: 3000
});

  useEffect(() => { initializeTodos() }, []) // componentDidMount
  
  async function initializeTodos() {
    const initialTodos = await get('/todos')
    if (response.ok) setTodos(initialTodos)
  }

  async function addTodo() {
    const newTodo = await post('/todos', { title: 'my new todo' })
    if (response.ok) setTodos([...todos, newTodo])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  )
}

const Example = () => {
    const { openPortal, closePortal, isOpen, Portal } = usePortal()
    return (
      <>
        <button onClick={openPortal}>
          Open Portal
        </button>
        <Portal>
          <p className={isOpen ? 'animateIn' : 'animateOut'}>
            This Portal handles its own state.{' '}
            <button onClick={closePortal}>Close me!</button>, hit ESC or
            click outside of me.
          </p>
        </Portal>
      </>
    )
}

const Example2 = () => {
    const newTodo = useInput('');
    const showCounter = useBoolean(true);
    const limitedNumber = useNumber(3, { lowerLimit: 0, upperLimit: 5 });
    const counter = useNumber(0);
    const todos = useArray(['hi there', 'sup', 'world']);
  
    const rotatingNumber = useNumber(0, {
      lowerLimit: 0,
      upperLimit: 4,
      loop: true,
    });
  
    return (
      <div>
        <button onClick={showCounter.toggle}> toggle counter </button>
        <button onClick={() => counter.increase()}> increase </button>
        {showCounter.value && <span> {counter.value} </span>}
        <button onClick={() => counter.decrease()}> decrease </button>
        <button onClick={todos.clear}> clear todos </button>
        <input type="text" value={newTodo.value} onChange={newTodo.onChange} />
      </div>
    );
};

