import user from 'Json/user.json';
import data from 'Json/data.json';
import friends from 'Json/friends.json';
import transactions from 'Json/transactions.json';

import Profile from 'tasks/task1/task1';
import Statistics from 'tasks/task2/task2';
import FriendList from 'tasks/task3/FriendList/FriendList';
import TransactionHistory from 'tasks/task4/transactions';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};


    