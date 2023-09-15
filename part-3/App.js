const App = () => (
  <div>
    <Person name="Alice" age={35} hobbies={["Reading", "Swimming", "Coding"]} />
    <Person name="Christopher" age={16} hobbies={["Gaming", "Cycling"]} />
    <Person name="Elena" age={22} hobbies={["Painting", "Singing"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
