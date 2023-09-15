//  ## **Part 3**

// Create a component called *Person*. Inside of this component, render a *p* tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional *h3* that says “please go vote!”. Otherwise, display an *h3* that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your *Person* component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an *li*.

// Add an *App* component that renders at least three copies of the *Person* component on the page.

const Person = (props) => {
  const { name, age, hobbies } = props;
  const voteAge = age >= 18;
  const shortName = name.length > 8 ? `${name.substring(0, 5)}` : name;

  return (
    <div>
      <h2>Learn some information about this person:</h2>
      <p>Name: {shortName}</p>
      <p>Age: {age}</p>
      <h3>{voteAge ? "Please go vote!" : "You must be 18"}</h3>
      <ul>
        {" "}
        Hobbies:
        {hobbies.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};
