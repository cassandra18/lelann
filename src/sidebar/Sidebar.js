import "./Sidebar.css";
import Grade from "./Grade/Grade";
import Subject from "./Subject/Subject";
import Publisher from "./Publisher/Publisher";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <h1>LELANN</h1>
          <h2 className="bookstore">BOOKSTORE</h2>
        </div>
      </div>

      <Grade/>
      <Subject/>
      <Publisher/>
    </section>
  );
}
