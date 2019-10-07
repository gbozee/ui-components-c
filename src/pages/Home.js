import React from "react";
import "./Account.css";

let accounts = [
  {
    id: 1,
    title: "Account 1",
    slug: "account-1"
  },
  {
    id: 2,
    title: "Account 2",
    slug: "account-2"
  },
  {
    id: 3,
    title: "Account 3",
    slug: "account-3"
  },
  {
    id: 4,
    slug: "account-4",
    title: "Account 4"
  }
];

const AccountItem = ({ account, onClick }) => {
  return (
    <div className="container">
      <div className="account-items" onClick={onClick}>
        {account.title}
      </div>
    </div>
  );
};

export const Home = ({ history }) => {
  return (
    <div>
      <div className="">
        <div className="buttons">
          <button> Fetch Accounts</button>
        </div>

        {accounts.map(account => {
          return (
            <AccountItem
              onClick={() => history.push(`/market/${account.slug}`)}
              account={account}
            />
          );
        })}
      </div>
    </div>
  );
};
