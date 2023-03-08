import Amount from "./components/Amount";
import Form from "./components/Form";
import List from "./components/List";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
    <Form/>
    <Amount/>
    <List/>
    </GlobalProvider>
  );
}

export default App;
