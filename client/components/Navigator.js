import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookies } from 'react-cookie'

const Navigation = () => {
  const cookies = new Cookies()
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(cookies.get("token"));
  }, []);

  return (
    <>
      <h2>Navigator</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Main page</a>
          </Link>
        </li>
        {!token && (
          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
        )}
        {!token && (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}
        {token && (
          <li>
            <Link href="/secure">
              <a>Secured page</a>
            </Link>
          </li>
        )}
        {token && (
          <li>
            <Link href="/logout">
              <a>Logout</a>
            </Link>
          </li>
        )}

      </ul>
    </>
  )
}

export default Navigation;
