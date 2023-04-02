import { createState, Component } from 'solid-js';

export const Page: Component = () => {
  const [state, setState] = createState({ count: 0 });

  return (
    <div class="tile">
      <h3>Solid {state.count}</h3>
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
    </div>
  );
};
