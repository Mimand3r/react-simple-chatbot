import './App.css';
import ChatBot from './chatbot/lib';

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
