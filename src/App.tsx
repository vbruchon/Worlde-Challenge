import { RulesModal } from './components/modal/RulesModal'
import { LoseModal } from './components/modal/LoseModal'
import { PlayerWin } from './components/PlayerWin'
import { Game } from './components/Game'

function App() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center gap-y-16 overflow-hidden">
            <RulesModal />
            <PlayerWin />
            <LoseModal />
            <Game />
        </div>
    )
}

export default App
