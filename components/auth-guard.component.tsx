import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { JournalContextProvider } from '../context/journal.context';
import { UserContext } from '../context/user.context'

export default function AuthGuard({ required = true, children }) {
  const [loading, setLoading] = useState(true);
  const auth = useContext(UserContext);

  useEffect(() => {
    if((auth?.user && !required)) {
      Router.push("/");
    } else if (!auth?.user && required) {
      Router.push("/auth/login");
    }
 
    setLoading(false)
  }, [auth?.user])

  return (
    !loading ? (
      auth?.user ? (
        <JournalContextProvider>
          {children}
        </JournalContextProvider>
      ) : (
        <div>
          {children}
        </div>
      )
    ) : (
      <div></div>
    )
  )
}
