import { useState } from 'react';

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_rep, setPasswordRep] = useState("");
    const [error, setError] = useState("");


    return (
        <form className={'RegisterForm'} onSubmit={e => {
      e.preventDefault();
      if (password != password_rep) {
          setError('passports must coincide! Try again');
          setPassword("");
          setPasswordRep("");
          return;
      }
      console.log(email, password);

    }}>
            <h1>Register!</h1>
            <p>You can register here. Just type down your email and password.
                We will send you a message to designated mail. check it.</p>
        <div>
            <label htmlFor="email">Email:</label>
            <input type='email' id="email" name="email" onChange={e => setEmail(e.target.value)} required/>
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type='password' id="password" name="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}  minLength={8} required/>
        </div>
        <div>
            <label htmlFor="password">Please repeat password:</label>
            <input type='password' id="password_rep" name="password_rep"
                   onChange={e => setPasswordRep(e.target.value)}
                   minLength={8}
                   value={password_rep}
                   required/>
        </div>
             {error && <p>{error}</p>}
            <input type="submit" value="Sign in" />
        </form>

    )
}