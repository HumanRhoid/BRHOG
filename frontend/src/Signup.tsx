import { useState } from 'react'
import type { ScreenProps } from './screen.types';
import { signupSchema } from './signup.schema';

export function Signup(props: ScreenProps) {
    const { isSignup } = props;
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [agreedPrivacy, setAgreedPrivacy] = useState(false);
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    return (
        <>
            <section
                id="signup"
                hidden={!isSignup}>
                <section
                    id="agree-terms">
                    <h1>
                        Sign Up
                    </h1>
                    <label>
                        <input
                            type="checkbox"
                            checked={agreedTerms}
                            onChange={(e) => setAgreedTerms(e.target.checked)} />
                        [필수] 이용약관 동의
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={agreedPrivacy}
                            onChange={(e) => setAgreedPrivacy(e.target.checked)} />
                        [필수] 개인정보처리방침 동의
                    </label>
                </section>
                <section
                    id="insert-info"
                    hidden={!(agreedTerms && agreedPrivacy)}>
                    <h1>
                        Insert Information
                    </h1>
                    <form
                        id="email-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const result = signupSchema.shape.email.safeParse(email);
                            if (!result.success) {
                                alert(result.error.issues[0].message);
                                return;
                            }
                            if (step === 1)
                                setStep(2);
                        }}
                        hidden={step !== 1 && step !== 3}>
                        <h3>이메일을 입력해주세요!</h3>

                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <br />
                    </form>
                    <form
                        id="name-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const result = signupSchema.shape.name.safeParse(name);
                            if (!result.success) {
                                alert(result.error.issues[0].message);
                                return;
                            }
                            if (step === 2)
                                setStep(3);
                        }}
                        hidden={step !== 2 && step !== 3}>
                        <h3>블노그에서 쓰실 별명을 넣어주세요!</h3>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <br />
                    </form>
                    <section>
                        <div
                            hidden={step !== 3}>
                            <h6>입력하신 정보가 맞으실까요?<br />
                                아니라면 수정해주세요!</h6>
                        </div>
                        <br />
                        <button
                            id="submit-btn"
                            onClick={async () => {
                                const result = signupSchema.safeParse({
                                    email,
                                    name: name,
                                });
                                if (!result.success) {
                                    alert(result.error.issues[0].message);
                                    return;
                                }
                                const req = await fetch("http://localhost:8000/signup", {
                                    method: "POST",
                                    headers: { "content-Type": "application/json" },
                                    body: JSON.stringify({ email: email, name: name })
                                })
                                const data = await req.json();
                                console.log(req.status, data)
                                setStep(4);
                            }}
                            hidden={step !== 3}>
                            제출할게요!
                        </button>
                    </section>
                </section>
            </section >
        </>

    )
}

