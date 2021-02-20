import { useAuth } from '../src/authProvider';

export default function Home() {
  const { user, loading, logout } = useAuth();

  if (loading) return null;
  if (!user) return <button className="link">Login</button>

  return(
    <main>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </main>
  );
}
