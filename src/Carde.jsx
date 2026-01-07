export default function carde() {

  const availableActivities = [
    {
      title: "Beach Buggy Adventure",
      desc: "Half-day · Pickup available",
      price: "From €60 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2023/02/buggy-safari-212669927895-1.jpg",
    },
    {
      title: "Camel Ride",
      desc: "2 hours · Pickup available",
      price: "From €35 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2022/02/lima-dromadaire-1024x814.jpg",
    },
    {
      title: "Horse Riding",
      desc: "2 hours · Pickup available",
      price: "From €40 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2022/02/Quad-Biking-and-Camel-Ride-Experience-By-Banana-beach-11.jpeg",
    },
    {
      title: "Quad Biking",
      desc: "2 hours · Pickup available",
      price: "From €50 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2022/02/IMG_4542-1-1024x819.jpg",
    },
    {
      title: "Paradise Valley",
      desc: "Full day · Pickup available",
      price: "From €30 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2022/02/81-1.jpg",
    },
    {
      title: "Essaouira Day Trip",
      desc: "Full day · Pickup available",
      price: "From €30 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2023/02/agadir-activities-essaouira-day-trip-1-1024x427.webp",
    },
    {
      title: "Legzira Beach",
      desc: "Full day · Pickup available",
      price: "From €45 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2022/02/Legzira-tour-1-1024x681.jpg",
    },
    {
      title: "Agadir City Tour",
      desc: "3 hours · Pickup available",
      price: "From €25 per person",
      img: "https://agadiractivities.com/wp-content/uploads/2022/02/images-1.jpg",
    },
  ];

  const thingsToDo = [
    {
      title: "Agadir Marina Walk",
      desc: "Free · Anytime",
      price: "Free",
      img: "https://images.unsplash.com/photo-1544986581-efac024faf62",
    },
    {
      title: "Souk El Had",
      desc: "Local market experience",
      price: "Free",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
      title: "Kasbah Oufella",
      desc: "Sunset viewpoint",
      price: "Free",
      img: "https://images.unsplash.com/photo-1590608897129-79da98d15969",
    },
    {
      title: "Surfing Lesson",
      desc: "2 hours · Instructor included",
      price: "From €45",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Boat Trip",
      desc: "Half-day experience",
      price: "From €40",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    {
      title: "Hammam & Spa",
      desc: "Relaxation experience",
      price: "From €25",
      img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    },
    {
      title: "Fishing Tour",
      desc: "Half-day trip",
      price: "From €50",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Night Food Tour",
      desc: "Local food tasting",
      price: "From €20",
      img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    },
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginBottom: "60px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={{ padding: "20px", background: "#f5f5f5" }}>

      {/* SECTION 1 */}
      <h1 style={{ color: "#5a2d2d", textAlign: "center", marginBottom: "30px" }}>
        Available activities
      </h1>

      <div style={gridStyle}>
        {availableActivities.map((item, i) => (
          <div key={i} style={cardStyle}>
            <img src={item.img} alt={item.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p style={{ color: "red", fontWeight: "bold" }}>{item.price}</p>
              <button style={{ padding: "10px", background: "#f5b000", border: "none" }}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 2 */}
      <h1 style={{ color: "#5a2d2d", textAlign: "center", marginBottom: "30px" }}>
        Things To Do in Agadir
      </h1>

      <div style={gridStyle}>
        {thingsToDo.map((item, i) => (
          <div key={i} style={cardStyle}>
            <img src={item.img} alt={item.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p style={{ color: "red", fontWeight: "bold" }}>{item.price}</p>
              <button style={{ padding: "10px", background: "#f5b000", border: "none" }}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
