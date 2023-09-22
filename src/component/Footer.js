import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
        <div>
          <h1>Sign Up To Our Newsletter.</h1>
          <p>Be the first to hear about the latest offers.</p>
        </div>
        <div className="subscription-container">
          <input type='text' placeholder='Your Email' className="subscription-input" />
          <button className="subscription-button">Subscribe</button>
        </div>
      </div>

      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
        <div>
          <b>Information</b><br /><br />
          <p>About Us</p>
          <p>About Zip</p>
          <p>Privacy Policy</p>
          <p>search</p>
          <p>Terms</p>
          <p>Orders and Returns</p>
          <p>Contact Us</p>
          <p>Advanced Search</p>
          <p>Newsletter Subscription</p>
        </div>

        <div>
          <b>PC Parts</b><br /><br />
          <p>CPUS</p>
          <p>Add on Cards</p>
          <p>Hard Drives (Internal)</p>
          <p>Graphic Cards</p>
          <p>Key boards / Mice</p>
          <p>Cases / Power Supplies / Cooling</p>
          <p>RAM (Memory)</p>
          <p>Spftware</p>
          <p>Speackers / Headsets</p>
          <p>Montherboards</p>
        </div>

        <div>
          <b>Desktop PCs</b><br /><br />
          <p>Custom PCs</p>
          <p>Servers</p>
          <p>MSI AII-IN-ONE PCs</p>
          <p>ASUS PCs</p>
          <p>Tecs PCs</p>
        </div>

        <div>
          <b>Laptops</b>
          <p>Evryday Use Notebooks</p>
          <p>MSI Workstation Series</p>
          <p>MSI Prestige Series</p>
          <p>Tabets and Pads</p>
          <p>Netbooks</p>
          <p>Infinity Gaming Notebooks</p>
        </div>

        <div>
          <b>Address</b>
          <p>Address: 1234 Street Adress City Address, 1234</p>
          <p>Phones: <span class="blue-text">(00) 1234 5678</span></p>
          <p>We are open: Monday-Thursday: 9:00 AM-</p>
          <p>5: 30 PM</p>
          <p>Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturrday: 11:00 AM -5:00 PM</p>
          <p>E-mail: <span class="blue-text">shop@email.com</span></p>
        </div>
      </div>
      <div>
           <img src='Rectangle 14.png'/>
           <div style={{display:'flex',justifyContent:"space-between" ,padding : '20px'}}>
         <div>
          <img src='ant-design_facebook-filled.png'/>
          <img src='ant-design_instagram-filled.png'/>
         </div>
        <img src='Group 103.png' alt='footer cards'/>
        <img src='Copyright.png'/>
      </div>
      </div>
    </div>
  )
}

export default Footer
