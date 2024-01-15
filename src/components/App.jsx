import User from './Profil/User';
import Statystics from './Statystics/Statysics';
import Friends from './Friends/Friends';
import Transaction from './Transaction/Transaction';
import user from './dt/user.json';
import data from './dt/data.json';
import friends from './dt/friends.json';
import transactions from './dt/transactions.json';

const App = () => {
  return (
    <>
      <User
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statystics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transaction items={transactions} />
    </>
  );
};
export default App;
