import animals from "./students/denis sigma/animalsDB";
import fish from "./students/denis sigma/fishDB";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SectionForImages from "./students/denis sigma/components/sectioncomponent";

export default function DenisMain() {
  return (
    <div>
      {/* У звязку з тим що ми отримуємо тут 2 БАЗИ ДАНИХ поясніть мені навіщо props в sectioncomponent.js */}
      <BrowserRouter>
        <nav>
          <Link to="/fishDB">Fish</Link> |{" "}
          <Link to="/animalsDB">Animals</Link>{" "}
        </nav>
        <Routes>
          <Route
            className="fish-nav"
            path="/fishDB"
            element={<SectionForImages dbs={fish} />}
          />
          <Route
            className="animals-nav"
            path="/animalsDB"
            element={<SectionForImages dbs={animals} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
