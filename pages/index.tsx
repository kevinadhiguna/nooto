import { useState, useEffect, FormEvent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { firebase } from '../src/initFirebase';
import FirebaseAuth from '../src/firebaseAuth';
import { useAuth } from '../src/authProvider';
import { resolveHref } from 'next/dist/next-server/lib/router/router';

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
      <Gists uid={user.uid} />
    </main>
  );
}

function AddGist( uid: { uid: string }) {
  const [file, setFile] = useState("");
  const [code, setCode] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const gistRef = db.ref("gists").push();
    await db.ref(`userGists/${uid}/${gistRef.key}`).set(true);
    await gistRef.set({
      uid, 
      file, 
      code
    });

    setFile("");
    setCode("");
  }

  return(
    <form onSubmit={onSubmit}>
      <input 
        required
        type="text" 
        placeholder="file.js"
        value={file}
        onChange={e => setFile(e.target.value)}
      />
      <textarea
        required
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

function Gists(uid: { uid: string }) {
  useEffect(() => {
    const userGistsRef = db.ref(`userGists/${uid}`);
    const refs = [userGistsRef];

    userGistsRef.on("child_added", child => {
      const key: string = child.key as string;
      const gistRef = db.ref(`gists/${key}`);
      refs.push(gistRef);
      gistRef.on("value", snap => {
        console.log(snap.val());
      });
    });

    return () => {
      refs.forEach(ref => ref.off());
    }
  }, []);

  return <ul></ul>;
}
