import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "../router/Paths";
import Fixtures from "../pages/Dashboard/Fixtures";
import MatchDetails from "../pages/MatchDetails/MatchDetails";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.home} Component={Fixtures} />
        <Route path={Paths.matchDetails} Component={MatchDetails} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
