function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <div className="logo"><img src="logo.png"/></div>
        <li>FRENCH</li> 
        <li>ENGLISH</li>
        <li>Home</li>
  <li className="dropdown">
    To do in Agadir
    <ul className="dropdown-menu">
      <li>Full-Day Desert Safari with Lunch and Camel Ride</li>
      <li>Sous Massa: National Park & Desert Safari With Lunch</li>
      <li>Quad Biking on the Sand Dunes</li>
      <li>Quad Biking and Camel Ride Experience by Banana Beach</li>
      <li>Half-Day Coastal Boat Trip with Lunch</li>
      <li>Agadir City Tour-Half Day and Crocodile Park</li>
      <li>Sandboarding in Agadir</li>
      <li>Half-Day Paradise Valley Trip Experience</li>
    </ul>
  </li>

  <li className="dropdown">
    Tours from Agadir
    <ul className="dropdown-menu">
      <li>Agadir City Tour</li>
      <li>Half-Day Paradise Valley Trip Experience</li>
      <li>Full-Day Desert Safari with Lunch and Camel Ride</li>
      <li>Sous Massa: National Park & Desert Safari With Lunch </li>
      <li>Paradise Valley & Sahara Dunes Guided Day Trip with Lunch</li>
      <li>Agadir City Tour-Half Day and Crocodile Park</li>
      <li>Marrakech Guided Day Trip</li>
      <li>Essauira Guided Day Trip</li>
      <li>Ouarzazat Ait Ben Haddou Day Trip</li>
      <li>Lgzira and Tiznit Day Trip</li>
      <li>Tafraout and Tiznit Day Trip</li>
      <li>Taroudant and Tiout Day Trip</li>
      <li>Imouzzer Day Trip</li>
    </ul>
  </li>

  <li className="dropdown">
    To do in Taghazout
    <ul className="dropdown-menu">
      <li>Full-Day Desert Safari with Lunch and Camel Ride</li>
      <li>Sous Massa: National Park & Desert Safari With Lunch</li>
      <li>Quad Biking and Camel Ride Experience by Banana Beach</li>
      <li>Half-Day Coastal Boat Trip with Lunch</li>
      <li>Agadir City Tour-Half Day and Crocodile Park</li>
      <li>Sandboarding in Taghazout</li>
      <li>Half-Day Paradise Valley Trip Experience</li>
     <li> Camel Ride in Tagahazout </li>
     <li>Barbecue Camel Ride in Agadir</li>
     <li>Horse Ride in Taghazout</li>
     <li>Marrakech Day Trip frpm Taghazout</li>
     <li>Essaouira Day Trip from Tghazout </li> 
     <li>Legzira and Tiznit Day Trip</li>
     <li>Jetski in Agadir</li>
    </ul>
  </li>

  <li className="dropdown">
    More
    <ul className="dropdown-menu">
      <li className="dropdown-item">
        Sahara Desert & Imperial Tours
        <ul className="sub-dropdown">
          <li>2 Days Sahara Desert To Zagora from Agadir</li>
          <li>3 Days Sahara Desert To Marzouga from Agadir</li>
          <li>3 Days Sahara Desert to chegaga from Agadir</li>
          <li>4 Days Sahara Desert To Merzouga from Agadir</li>
          <li>6 Days Sahara & Imperial Dicovery</li>
          <li>2 days to Essaouira & Marrakech From Agadir </li>
          <li>3 days Ouarzazat from Agadir</li>
          <li>3 Days from ouzoud waterfalls from Agadir</li>
          <li>3 Days Casablanca from Agadir</li>
        </ul>
      </li>

      <li className="dropdown-item">
        Airport Transfers
        <ul className="sub-dropdown">
          <li>Agadir Airport</li>
          <li>Marrakech Airport</li>
        </ul>
      </li>

      <li className="dropdown-item">
        About Us
        <ul className="sub-dropdown">
          <li>Our Team</li>
          <li>Why Choose Us</li>
        </ul>
      </li>

      <li className="dropdown-item">
        Contact Us
        <ul className="sub-dropdown">
          <li></li>
          <li></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</nav>
  )
}

export default Navbar;
