import React from "react";
import AccountAside from "@/components/account/AccountAside";

const AccountLayout = ({ children }) => {
  return (
    <>
      <div className="account_wrapper">
        <div className="settings__left">
          <AccountAside />
        </div>
        {children}
      </div>
    </>
  )
}

export default AccountLayout