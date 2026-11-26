import { useState } from 'react';

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className={'LoginForm'} onSubmit={e => {
      e.preventDefault();
      console.log(email, password);
    }}>
            <h1>Log In!</h1>
            <p>You can create your account via email now.
                Or you can enter to already existing account using your password.</p>
        <div>
            <label htmlFor="email">Email:</label>
            <input type='email' id="email" name="email" onChange={e => setEmail(e.target.value)} required/>
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type='password' id="password" name="password" onChange={e => setPassword(e.target.value)} required/>
        </div>
            <input type="submit" value="Sign in" />
        </form>

    )
}