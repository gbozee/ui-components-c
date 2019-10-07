import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import { Home, Market, Actionpage } from "./pages";
import { SideDrawer, Navbar, Backdrop } from "./components";

function App() {
  const [sideDrawerOpen, setSideDrawer] = useState(false);
  const backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  const drawerToggleClickHandler = () => {
    setSideDrawer(!sideDrawerOpen);
  };
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <BrowserRouter>
      <div style={{ height: "100%" }}>
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <Switch>
          <div>
            <Route path="/actionpage" component={Actionpage} />
            <Route path="/market/:account" component={Market} />
            <Route path="/" exact component={Home} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
