# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. Stateful components implement logic and state, React lifecycle methods can be used inside class components for example, componentDidMount.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount is to make API calls once the component is initiated and configure the values into the state. It is done before the INITIAL render of a component, and is used to assess props and do any extra logic based upon them. componentWillUpdate gives us control to manipulate the component just before it receives new props or state. This function is generally called before the component is updated or when the state or props passed to the component changes.

3. Define stateful logic.
    Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed.

4. What are the three step of creating a successful test? What is done in each phase?
    1. Arrange - render a React element into a virtual DOM
    2. Act - query the DOM for a specific node that we expect to see in the browser
    3. Assert - assert that the element has indeed been rendered
    The arrange step sets up the test's input values. The act step prompts the primary function being tested.
