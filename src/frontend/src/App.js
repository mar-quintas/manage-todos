import { BrowserRouter, Route, Routes, useParams, UseNavigate, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList'
import ToAdd from './components/ToAdd'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import useTodosData from './components/useTodosData'


function App() {
  // NO los esta destructurando en el mismo orden que los exporto...
  const { todosData, getData, deleteData, editData, editTitle } = useTodosData();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Container>
            <Routes>
              <Route path="*" element={<Navigate to="/"/>}></Route>
                <Route path="/" element={
                    <Stack gap={4}>
                      <h1>Add your tasks!</h1>
                      <ToAdd getData={getData}/>
                      <TodoList editTitle={editTitle} editData={editData} deleteData={deleteData} todosData={todosData} getData={getData}/>
                    </Stack>
                }></Route>
            </Routes>
          </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
