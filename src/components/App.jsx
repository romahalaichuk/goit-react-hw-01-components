import React from 'react';
import User from './Profil/Profil';
import Statystics from './Statystics/Statysics';
import Friends from './Friends/Friends';
import Transaction from './Transaction/Transaction';
import user from './dt/user.json';
import data from './dt/data.json';
import friends from './dt/friends.json';
import transactions from './dt/transactions.json';

export const App = () => {
  return (
    <>
      <User
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statystics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transaction items={transactions} />
    </>
  );
};

export default App;
