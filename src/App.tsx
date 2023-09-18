import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { signInWithGoogle } from "./utils/auth";

function App(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const signIn = async () => {
    const userCredential = await signInWithGoogle();
    console.log(userCredential);
    if (userCredential?.user.email) {
      setEmail(userCredential.user.email);
    }
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <div className="card">
        <button onClick={() => signIn()}>Sign in</button>

        <div className="padding-top-2em">
          {email ? `Current user's e-mail is ${email}.` : "Not logged in."}
        </div>
      </div>
    </>
  );
}

export default App;
