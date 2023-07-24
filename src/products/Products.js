import "./Products.css";
import {BsFillBagCheckFill} from "react-icons/bs";

export default function products() {
  return (
    <section className="card-container">
      <section className="card">
        <img className="card-img" src="https://officemart.co.ke/media/cache/5c/f2/5cf22cc2ae38478e88b816d31e4dd7a7.jpg" alt="Maths">
        </img>
        <div className="card-details">
          <h3 className="card-title">Spotlight Mathematics</h3>
          <section className="total-items"> Remaining items
            <span className="total-items-quantity" > <strong> 5</strong> </span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>sh440</del>  400
            </div>
            <div className="bag">
              <BsFillBagCheckFill/>
            </div>
          </section>
        </div>
      </section>

      
    </section>

    
  )
}
