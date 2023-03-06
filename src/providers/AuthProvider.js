import React, {useContext, useState, useEffect, useRef} from 'react';
import Realm from 'realm';
import app from '../realmApp';

const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(app.currentUser);
  const realmRef = useRef(null);

  const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(creds);
    setUser(user);
    if (user === null) {
      return false;
    }
    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };
    Realm.open(config).then(userRealm => (realmRef.current = userRealm));
    return true;
  };

  const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser({email, password});
  };

  const signOut = async () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    if (realmRef.current) {
      realmRef.current.close();
      realmRef.current = null;
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error('useAuth() called outside of a AuthProvider');
  }
  return auth;
};

export {AuthProvider, useAuth};
