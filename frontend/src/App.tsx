import './App.css';
import ChatBot from './chatbot_vorlage/lib';

const botSendsMessage = () => {
  return "hallo ich bin dein bot";
}

const steps=[
  {
    id: '1',
    message: botSendsMessage,
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    end: '1',
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

