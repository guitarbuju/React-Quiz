import { Question } from "./models/Question.ts";

export const questions: Question[] = [
  {
    id: 1,
    question:
      "Which of the following is used in React.js to increase performance?",
    answers: [
      {
        id: 1,
        answer: "Virtual DOM",
        charge: 5,
      },
      {
        id: 2,
        answer: "Original DOM",
        charge: 0,
      },
      {
        id: 3,
        answer: "Both",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 2,
    question: "What is ReactJS?",
    answers: [
      {
        id: 1,
        answer: "Server-side framework",
        charge: 0,
      },
      {
        id: 2,
        answer: "User Interface framework",
        charge: 5,
      },
      {
        id: 3,
        answer: "Both",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 3,
    question:
      "Identify the one which is used to pass data to components from outside",
    answers: [
      {
        id: 1,
        answer: "Render with arguments",
        charge: 0,
      },
      {
        id: 2,
        answer: "setState",
        charge: 0,
      },
      {
        id: 3,
        answer: "propTypes",
        charge: 0,
      },
      {
        id: 4,
        answer: "props",
        charge: 5,
      },
    ],
  },
  {
    id: 4,
    question: "Who created React Js?",
    answers: [
      {
        id: 1,
        answer: "Jordan Lee",
        charge: 0,
      },
      {
        id: 2,
        answer: "Jordan Walke",
        charge: 5,
      },
      {
        id: 3,
        answer: "Tim Lee",
        charge: 0,
      },
      {
        id: 4,
        answer: "Jordan Mike",
        charge: 0,
      },
    ],
  },
  {
    id: 5,
    question: "In which language is React.js written?",
    answers: [
      {
        id: 1,
        answer: "PHP",
        charge: 0,
      },
      {
        id: 2,
        answer: "C#",
        charge: 0,
      },
      {
        id: 3,
        answer: "Javascript",
        charge: 5,
      },
      {
        id: 4,
        answer: "Java",
        charge: 0,
      },
    ],
  },
  {
    id: 6,
    question: "What is Babel?",
    answers: [
      {
        id: 1,
        answer: "Javascript Compiler",
        charge: 5,
      },
      {
        id: 2,
        answer: "Javascript Interpreter",
        charge: 0,
      },
      {
        id: 3,
        answer: "Javascript Transpiler",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 7,
    question: "Identify the command used to create a react app",
    answers: [
      {
        id: 1,
        answer: "npm install create-react-app",
        charge: 0,
      },
      {
        id: 2,
        answer: "npm install -g create-react-app",
        charge: 5,
      },
      {
        id: 3,
        answer: "install -g create-react-app",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 8,
    question:
      "Which of the following port is the default where webpack-dev-server runs?",
    answers: [
      {
        id: 1,
        answer: "3000",
        charge: 0,
      },
      {
        id: 2,
        answer: "8080",
        charge: 5,
      },
      {
        id: 3,
        answer: "3306",
        charge: 0,
      },
      {
        id: 4,
        answer: "3030",
        charge: 0,
      },
    ],
  },
  {
    id: 9,
    question: "In MVC, what does React.js act as??",
    answers: [
      {
        id: 1,
        answer: "Model",
        charge: 5,
      },
      {
        id: 2,
        answer: "Controller",
        charge: 0,
      },
      {
        id: 3,
        answer: "View",
        charge: 0,
      },
      {
        id: 4,
        answer: "Middleware",
        charge: 0,
      },
    ],
  },
  {
    id: 10,
    question: "How many elements can a valid react component return?",
    answers: [
      {
        id: 1,
        answer: "1",
        charge: 5,
      },
      {
        id: 2,
        answer: "2",
        charge: 0,
      },
      {
        id: 3,
        answer: "3",
        charge: 0,
      },
      {
        id: 4,
        answer: "4",
        charge: 0,
      },
    ],
  },
  {
    id: 11,
    question: "A state in React.js is also known as?",
    answers: [
      {
        id: 1,
        answer: "The internal Storage of the component",
        charge: 5,
      },
      {
        id: 2,
        answer: "The external Storage of the component",
        charge: 0,
      },
      {
        id: 3,
        answer: "Both",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 12,
    question:
      "Which of the following method is used to access the state of a component from inside of a member function?",
    answers: [
      {
        id: 1,
        answer: "this.protoType.stateValue",
        charge: 0,
      },
      {
        id: 2,
        answer: "this,getState()",
        charge: 0,
      },
      {
        id: 3,
        answer: "this.value",
        charge: 5,
      },
      {
        id: 4,
        answer: "this.state",
        charge: 0,
      },
    ],
  },
  {
    id: 13,
    question:
      "State whether true or false:  Props are methods into other components?",
    answers: [
      {
        id: 1,
        answer: "True",
        charge: 5,
      },
      {
        id: 2,
        answer: "False",
        charge: 0,
      },
    ],
  },
  {
    id: 14,
    question: "What are arbitrary inputs of components in react also known as?",
    answers: [
      {
        id: 1,
        answer: "Elements",
        charge: 0,
      },
      {
        id: 2,
        answer: "Props",
        charge: 5,
      },
      {
        id: 3,
        answer: "Keys",
        charge: 0,
      },
      {
        id: 4,
        answer: "Ref",
        charge: 0,
      },
    ],
  },
  {
    id: 15,
    question:
      "Among The following options, choose the one which helps react for keeping their data uni-directional?",
    answers: [
      {
        id: 1,
        answer: "Dom",
        charge: 0,
      },
      {
        id: 2,
        answer: "Flux",
        charge: 5,
      },
      {
        id: 3,
        answer: "JSX",
        charge: 0,
      },
      {
        id: 4,
        answer: "Props",
        charge: 0,
      },
    ],
  },
  {
    id: 16,
    question:
      "Using which of the following command can prevent default behaviour at in react?",
    answers: [
      {
        id: 1,
        answer: "prevent.default",
        charge: 5,
      },
      {
        id: 2,
        answer: "avoid.default",
        charge: 0,
      },
      {
        id: 3,
        answer: "revokeDefault()",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 17,
    question: "Identify the smallest building block of React.JS.",
    answers: [
      {
        id: 1,
        answer: "Props",
        charge: 0,
      },
      {
        id: 2,
        answer: "Elements",
        charge: 0,
      },
      {
        id: 3,
        answer: "Components",
        charge: 5,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 18,
    question: "What is ReactJS mainly used for building?",
    answers: [
      {
        id: 1,
        answer: "Data Base",
        charge: 0,
      },
      {
        id: 2,
        answer: "Connectivity",
        charge: 0,
      },
      {
        id: 3,
        answer: "User Interface",
        charge: 5,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 19,
    question:
      "Which of the following function is used to change the state of react component?",
    answers: [
      {
        id: 1,
        answer: "this.setState()",
        charge: 5,
      },
      {
        id: 2,
        answer: "this.state",
        charge: 0,
      },
      {
        id: 3,
        answer: "this.setChangeState()",
        charge: 0,
      },
      {
        id: 4,
        answer: "None",
        charge: 0,
      },
    ],
  },
  {
    id: 20,
    question:
      "Among the following which acts as the input of class-based component?",
    answers: [
      {
        id: 1,
        answer: "Factory",
        charge: 0,
      },
      {
        id: 2,
        answer: "Render",
        charge: 0,
      },
      {
        id: 3,
        answer: "Class",
        charge: 0,
      },
      {
        id: 4,
        answer: "Props",
        charge: 5,
      },
    ],
  },
];
