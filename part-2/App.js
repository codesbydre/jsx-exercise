const App = () => (
  <div>
    <Tweet
      username="dogluvr1999"
      name="Jane Doe"
      date="September 14, 2023"
      message="My first tweet."
    />
    <Tweet
      username="catluvr2001"
      name="John Smith"
      date="September 15, 2023"
      message="Hello!"
    />
    <Tweet
      username="turtleluvr2005"
      name="Tom Nook"
      date="September 15, 2023"
      message="Hi everyone, I love turtles."
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
