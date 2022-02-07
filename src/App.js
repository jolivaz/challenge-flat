import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RepositoriesContext from './context/repositoriesContext'
import DashboardLayout from './layout/dashboard/dashboardLayout'
import BranchesLayout from './layout/branches/branchesLayout'
import BranchesContext from './context/branchesContext'
import HomeLayout from './layout/home/homeLayout'
import UsersContext from './context/userContext'
import PullsLayout from './layout/pulls/pulls'

function App() {
  return (
    <div className="App">
      <UsersContext>
        <RepositoriesContext>
          <BranchesContext>
            <BrowserRouter>
              <Routes>
                <Route path='*' element={<HomeLayout />}></Route>
                <Route path='/dashboard:id' element={<DashboardLayout />}></Route>
                <Route path='/branches:id' element={<BranchesLayout />}></Route>
                <Route path='/pulls:id' element={<PullsLayout />}></Route>
              </Routes>
            </BrowserRouter>
          </BranchesContext>
        </RepositoriesContext>
      </UsersContext>
    </div>
  )
}

export default App
