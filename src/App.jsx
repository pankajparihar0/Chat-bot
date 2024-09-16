
import './App.css'
import FileUpload from './components/FileUpload'
import ChatComponent from './components/ChatComponent'
function App() {

  return (
    <div className="m-5 p-2 min-h-screen bg-gray-100 flex  flex-row items-center justify-around">
      <FileUpload />
      <ChatComponent/>
    </div>
  )
}

export default App
