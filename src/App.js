import Profile from './components/Profile';
import Statistics from './components/Statsdata';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './components/Profile/user.json';
import statisticalData from './components/Statsdata/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import s from './App.module.css';

function App() {
  return (
    <div className={s.containerApp}>
      <div className={s.containerProfile}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <div>
          <Statistics title="Upload stats" stats={statisticalData} />
          <FriendList friends={friends} />
        </div>
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
