import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];

  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;

  // fetchTodos(): any;
  // deletTodo(id: number): any;
  //  fetchTodos: typeof fetchTodos;  // this gives an error fetchTodos: () => Promise<void> coz they have async and wait function
  //// React-redux don't know what redux thunk will return
  // To solve the upper problem we should give function as return type
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map(
      (todo: Todo): JSX.Element => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
        </div>
      )
    );
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>This a class components</h1>
        <button onClick={this.onButtonClick}>Fetch Todo list</button>
        {this.state.fetching ? "Loading" : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
