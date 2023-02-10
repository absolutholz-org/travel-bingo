import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PubNub from 'pubnub';
// import { PubNubProvider } from 'pubnub-react';
// import { nanoid } from 'nanoid';

import { Home } from './pages/Home';
import { Create } from './pages/Create';
import { LobbyHost } from './pages/Lobby';
import { LobbyGuest } from './pages/Lobby';
import { Game } from './pages/Game';
import { NotFound } from './pages/404';
// import { PlayerContextProvider } from './context/PlayerContext';
// import { GameConfigContextProvider } from './context/GameConfigContext/_GameConfigContextProvider';
import { GlobalReset } from './styles/reset';
import { GlobalTheme } from './styles/theme';

// const pubnub = new PubNub({
// 	publishKey: import.meta.env.VITE_PUBNUB_PUBLISH_KEY,
// 	subscribeKey: import.meta.env.VITE_PUBNUB_SUBSCRIBE_KEY,
// 	userId: nanoid(),
// });
// console.log({
// 	publishKey: import.meta.env.VITE_PUBNUB_PUBLISH_KEY,
// 	subscribeKey: import.meta.env.VITE_PUBNUB_SUBSCRIBE_KEY,
// 	userId: nanoid(),
// });

function App() {
	return (
		<>
			{/* <PubNubProvider client={pubnub}> */}
			<GlobalReset />
			<GlobalTheme />

			{/* <PlayerContextProvider>
				<GameConfigContextProvider> */}
			<BrowserRouter basename="/travelbingo">
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="create" element={<Create />} />
						<Route
							path="lobby/:gameId/host"
							element={<LobbyHost />}
						/>
						<Route path="lobby/:gameId" element={<LobbyGuest />} />
						<Route path="game/:gameId" element={<Game />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
			{/* </GameConfigContextProvider>
			</PlayerContextProvider> */}
			{/* </PubNubProvider> */}
		</>
	);
}

export default App;
