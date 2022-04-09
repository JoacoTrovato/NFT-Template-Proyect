import './App.css';
import { AppRoutes } from './components';
import { NavContainer, FooterContainer } from './containers'

function App() {
  return (
      <>
        <NavContainer />
          <AppRoutes />
        <FooterContainer />
      </>
    );
}

export default App;

            /* USER DASHBOARD DONE 
            <Route path="/dashboard/:id" element={<DashBoardUserContainer />} />
            
            USER PROFILE DONE 
            <Route path="/profile" element={ <ProfileContainer />} />

            COMPANY DASHBOARD DONE 
            <Route path="company/dashboard" element={<CompanyDashBoardContainer />} />
            
            COMPANY PROFILE DONE
            <Route path="/company/profile/" element={ <CompanyProfileContainer />} /> */





