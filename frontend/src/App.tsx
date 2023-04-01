import './App.css';
import ChatBot from './chatbot_vorlage/lib';

const steps=[
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    options: [
      { value: 1, label: 'Number 1', trigger: '4' },
      { value: 2, label: 'Number 2', trigger: '3' },
      { value: 3, label: 'Number 3', trigger: '3' },
    ],
  },
  {
    id: '4',
    component: (
      <div> This is an example component </div>
    ),
    trigger: '5',
  },
  {
    id: '6',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true,
  },
]

function App() {
  return (
    <div>
       <ChatBot steps={steps} />
    </div>
  );
}

export default App;
