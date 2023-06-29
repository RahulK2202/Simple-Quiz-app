const quizData = [
    {
      id: 1,
      title: 'What is React?',
      info:
        'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update the user interface when the underlying data changes.',
    },
    {
      id: 2,
      title: 'What are the key features of React?',
      info:
        'React features a virtual DOM (Document Object Model) for efficient updates and rendering,It uses a component-based architecture, allowing you to build UIs by composing reusable components.',
    },
    {
      id: 3,
      title: 'What is JSX in React?',
      info:
        'JSX (JavaScript XML) is an extension to JavaScript syntax used in React. It allows you to write HTML-like code within JavaScript, making it easier to define the structure and appearance of React components.',
    },
    {
      id: 4,
      title: 'What is the significance of the virtual DOM in React?',
      info:
        'The virtual DOM is a lightweight representation of the actual DOM. React uses the virtual DOM to track changes to the UI and efficiently update only the necessary components when the underlying data changes. This approach minimizes the number of direct manipulations of the actual DOM, resulting in better performance.',
    },
    {
      id: 5,
      title: 'What is the difference between functional components and class components in React?',
      info:
        'Functional components are stateless and are defined as plain JavaScript functions. They receive props as input and return the JSX to render the UI.,Class components are defined as ES6 classes and have additional features such as local state and lifecycle methods. They are typically used when you need to manage state or use lifecycle hooks.',
    },
  ]
  export default quizData