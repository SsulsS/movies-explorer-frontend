import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={(
          <>
          <Header loggedIn={false} />
          <Main />
          <Footer />
          </>
        )}>
        </Route>
        <Route path="/movies" element={(
          <>
          <Header loggedIn={true} />
          <Movies />
          <Footer />
          </>
        )}>
        </Route>
        <Route exact path="/saved-movies" element={(
          <>
          <Header loggedIn={true} />
          <SavedMovies />
          <Footer />
          </>
        )}>
        </Route>
        <Route exact path="/signup" element={(
          <>
          <Register />
          </>
        )}>
        </Route>
        <Route exact path="/signin" element={(
          <>
          <Login />
          </>
        )}>
        </Route>
        <Route exact path="/profile" element={(
          <>
          <Header loggedIn={true} />
          <Profile />
          </>
        )}>
        </Route>
        <Route path="*" element={(
          <>
          <PageNotFound />
          </>
        )}>
        </Route>
      </Routes>
    </main>
  );
}

export default App;