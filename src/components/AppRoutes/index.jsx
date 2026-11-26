import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import ModalDemo from "../../pages/ModalDemo";
import Profile from "../../pages/Profile";
import ScrollDemo from "../../pages/ScrollDemo";
import DefaultLayout from "../../layouts/DefaultLayout";
import PerformanceDemo from "../../pages/PerformanceDemo";
import FocusDemo from "../../pages/FocusDemo";
import HocDemo from "../../pages/HocDemo";
import RenderPropsDemo from "../../pages/RenderPropsDemo";
import CustomHooksDemo from "../../pages/CustomHooksDemo";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/modalDemo" element={<ModalDemo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scrollDemo" element={<ScrollDemo />} />
        <Route path="/performance-demo" element={<PerformanceDemo />} />
        <Route path="/focus-demo" element={<FocusDemo />} />
        <Route path="/hoc-demo" element={<HocDemo />} />
        <Route path="/render-props-demo" element={<RenderPropsDemo />} />
        <Route path="/custom-hooks-demo" element={<CustomHooksDemo />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
