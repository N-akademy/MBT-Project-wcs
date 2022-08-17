import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ConnexionPage from './Pages/User/ConnexionPage';
import InscriptionPage from './Pages/User/InscriptionPage';
import UserListPage from './Pages/User/UserListPage';
import UserParamsPage from './Pages/User/UserParamsPage';
import TicketCreationPage from './Pages/Ticket/TicketCreationPage';
import TicketDetailPage from './Pages/Ticket/TicketDetailPage';
import TicketListPage from './Pages/Ticket/TicketListPage';
import ProjectCreationPage from './Pages/Project/ProjetCreationPage';
import ProjetDetailsPage from './Pages/Project/ProjetDetailsPage';
import ProjectListPage from './Pages/Project/ProjectListPage';

// Helpers
function PrivateRoute({ children }: { children: JSX.Element }) {
  let cookie = document.cookie;
  let location = useLocation();
  if (cookie === '') {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
}

// Routeur
function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        {
          // Main Routes
        }
        <Route path="/login" element={<ConnexionPage />} />
        <Route path="/register" element={<InscriptionPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        {
          // Project Routes
        }
        <Route
          path="/projetCreation"
          element={
            <PrivateRoute>
              <ProjectCreationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/projetDetails"
          element={
            <PrivateRoute>
              <ProjetDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/projetList"
          element={
            <PrivateRoute>
              <ProjectListPage />
            </PrivateRoute>
          }
        />
        {
          // Ticket Routes
        }
        <Route
          path="/ticketCreation"
          element={
            <PrivateRoute>
              <TicketCreationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketDetails/:id"
          element={
            <PrivateRoute>
              <TicketDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketlist"
          element={
            <PrivateRoute>
              <TicketListPage />
            </PrivateRoute>
          }
        />
        {
          // Other Routes
        }
        <Route
          path="/userlist"
          element={
            <PrivateRoute>
              <UserListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/userparam"
          element={
            <PrivateRoute>
              <UserParamsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
