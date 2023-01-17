import * as ReactDOM from "react-dom";
import { Button } from "../src/components/Button/Button";
import { sprinkles } from "../src/styles/sprinkles.css";

const App = () => {
  return (
    <div
      className={sprinkles({
        flexDirection: "column",
        alignItems: "flex-start",
        display: "flex",
        padding: "md",
        gap: "md",
      })}
    >
      <h1>UI Example</h1>
      <Button size="md" color="muted">
        Muted
      </Button>
      <Button size="md" color="primary">
        Primary
      </Button>
      <Button size="md" color="secondary">
        Secondary
      </Button>
    </div>
  );
};

export default App;
console.log(document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
