import "./Sidebar.css";
import Grade from "./Grade/Grade";
import Subject from "./Subject/Subject";
import Publisher from "./Publisher/Publisher";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1 className="logo">
          LELANN
          <span className="bookstore">BOOKSTORE</span>
        </h1>
      </div>

      <Grade/>
      <Subject/>
      <Publisher/>
    </section>
  );
}
