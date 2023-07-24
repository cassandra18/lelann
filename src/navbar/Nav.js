import "./Nav.css";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser} from "react-icons/ai";
export default function Nav() {
  return <nav>
    <div className="nav-container">
      <input 
      type="text" 
      className="search-input" 
      placeholder="Enter your search"
      />
    </div>

    <div className="profile-container">
      <a href="#">
        < AiOutlineHeart className="nav-icons"/>
      </a>
      <a href="#">
        < AiOutlineShoppingCart className="nav-icons"/>
      </a>
      <a href="#">
        < AiOutlineUser className="nav-icons"/>
      </a>
    </div>

  </nav>
   
  
}
