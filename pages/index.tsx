import { useState, useEffect, FormEvent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { firebase } from '../src/initFirebase';
import FirebaseAuth from '../src/firebaseAuth';
import { useAuth } from '../src/authProvider';

// Setup instance of Database
const db = firebase.database();

export default function Home() {
  const { user, loading, logout } = useAuth();

  if (loading) return null;
  if (!user) return <FirebaseAuth />;

  return(
    <main>
      <button type="button" className="link" onClick={logout}>
        Logout
      </button>
      <AddGist uid={user.uid} />
    </main>
  );
}

function AddGist({uid}: { uid: string }) {
  const [file, setFile] = useState("");
  const [code, setCode] = useState("");

  return(
    <form>
      <button type="submit">Save</button>
    </form>
  );
}
