import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../redux/actions/todosActions";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state);
  console.log(todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos App</h1>
      {isLoading && <p>Loading .......</p>}
      {error && <p>{error.message}</p>}
      <section>
        {todos.map((todo) => {
          return (
            <article>
              <h3>{todo.id} </h3>
              <h2>{todo.title}</h2>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Todos;
