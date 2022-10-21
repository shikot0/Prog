import {DarkThemeProvider} from './GlobalContext';
import {LearningListProvider} from './GlobalContext';
import Header from './Header';
import CurrentlyLearning from './CurrentlyLearning';
import AddItemPage from './AddItemPage';
import EditItemPage from './EditItemPage';
import {Route, Routes} from 'react-router-dom';
import './CurrentlyLearningPage.css';


function App() {

  return (
      <DarkThemeProvider>
        <Header/>
        <LearningListProvider>
          <main>
              <Routes>
                <Route exact path="/" element={<CurrentlyLearning/>} />
                <Route path="/add-item" element={<AddItemPage/>} />
                <Route path="/edit-item/:item" element={<EditItemPage/>} />
              </Routes> 
          </main>
        </LearningListProvider>
      </DarkThemeProvider>
  );
}

export default App;
