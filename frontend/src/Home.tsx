import type { ScreenProps } from './screen.types';

export function Home(props: ScreenProps) {
    const { isSignup, setIsSignup } = props;
    return (
        <section id="home" hidden={isSignup}>
            <h1>
                Welcome to Our BRHOG
            </h1>
            <button id="signup-btn" onClick={() => setIsSignup(true)}>Sign Up</button>
        </section>
    )
}