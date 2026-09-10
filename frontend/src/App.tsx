import { useState } from 'react'
import { Home } from './Home.tsx'
import { Signup } from './Signup.tsx'

// import './App.css'
function App() {
  const [isSignup, setIsSignup] = useState(false);
  // useState는 state를 관리하는 hook임. useState의 인자로 초기값을 넣어주면, 그 값이 state의 초기값이 됨.
  // 이후에는 setIsSignup을 통해 state를 변경할 수 있음.
  // 첫 렌더링 이후에는 initial value를 무시하고, state의 현재 값이 유지됨. 즉 false할당은 초반 외에는 의미가 없음.
  return (
    <>
      <header>
        {/* <Logo /> */}
        <nav></nav>
      </header>
      <main>
        <Home isSignup={isSignup} setIsSignup={setIsSignup} />
        <Signup isSignup={isSignup} setIsSignup={setIsSignup} />
      </main>
      <footer>
        <br />
        <br />
        <br />

        <p>&copy; 2023 My App. All rights reserved.</p>
        <p>call us at 1-800-123-4567</p>
        <nav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
      </footer>
    </>
  )
}

export default App
