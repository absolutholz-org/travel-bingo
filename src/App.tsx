import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Create } from './pages/Create';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { Lobby } from './pages/Lobby';
import { NotFound } from './pages/404';
import { PlayerContextProvider } from './context/PlayerContext';

function App() {
  return (
    <PlayerContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="lobby/:gameId" element={<Lobby />} />
            <Route path="game/:gameId" element={<Game />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PlayerContextProvider>
  );
}

export default App;
