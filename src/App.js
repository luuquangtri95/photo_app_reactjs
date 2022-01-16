import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Photo from "./features/Photo";

function App() {
  return (
    <div className="photo-app">
      <Header />
      <Banner />
      <Switch>
        <Redirect exact from="/" to="/photos" />

        <Route path="/photos" component={Photo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
