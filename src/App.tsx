import './App.css'
import CodeMentorFooter from "./components/CodeMentorFooter.tsx";
import MainHeader from "./components/MainHeader.tsx";
import ExtensionTable from "./components/ExtensionTable.tsx";
import {ThemeProvider} from "./Providers/Theme/ThemeProvider.tsx";

function App() {
  return <>
    <ThemeProvider>
      <MainHeader/>
      <ExtensionTable/>
      <CodeMentorFooter/>
    </ThemeProvider>
  </>
}

export default App;
