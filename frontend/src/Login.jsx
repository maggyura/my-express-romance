import { useState } from 'react';

export function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className={'RegistrationForm'} onSubmit={e => {
      e.preventDefault();
    }}>
            <h1>Register here!</h1>
            <p>You can create your account via email now.
                Or you can enter to already existing account using your password.</p>
        <div>
            <label htmlFor="email">Email:</label>
            <input type='email' id="email" name="email" onChange={e => setEmail(e.target.value)} required/>
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type='password' id="password" name="password" minLength={8} onChange={e => setPassword(e.target.value)} required/>
        </div>
            <input type="submit" value="Sign in" />
        </form>

    )
}