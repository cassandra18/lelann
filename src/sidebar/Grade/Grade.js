import "./Grade.css";


export default function Grade() {
  return (
    <div>
      <h2 className="sidebar-title">Grade</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test"></input>
          <span className="checkmark"></span>All
        </label>
      </div>
    </div>
    
  )
}
