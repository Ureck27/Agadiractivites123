import Card from "./Card";          
import "./CardsSection.css";
import sahara1 from "../images/sahara1.jpg";
import sahara2 from "../images/sahara2.jpg";
import sahara3 from "../images/sahara3.jpg";
import sahara4 from "../images/sahara4.jpg";
import saouira from "../images/saouira.jpg";
import capton from "../images/caption.jpg"
import capton2 from "../images/capton2.jpg"
import agadir from "../images/agadir.jpg"

const toursData = [
    {
    id: 1,
    title: "2 Days Sahara Desert To Zagora",
    description:
      "Experience the Sahara desert in 2 days to Zagora and enjoy a night in a traditional desert camp.",
    image:sahara1
    },
  {
    id: 2,
    title: "3 Days Sahara Desert To Merzouga",
    description:
      "Discover the golden dunes of Merzouga, camel trekking and desert camping.",
    image:sahara2
    },
  {
    id: 3,
    title: "3 Days Sahara Desert To Chegaga",
    description:
      "Adventure to the wild dunes of Chegaga through Zagora and Berber villages.",
    image:sahara3
    },
  {
    id: 4,
    title: "4 Days Sahara Desert Expedition",
    description:
      "Deep Sahara experience with off-road tracks, nomad camps and vast dunes.",
    image:sahara4
    },
  {
    id: 5,
    title: "Essaouira Coastal Trip",
    description:
      "Enjoy the calm Atlantic coast, old medina, and fresh seafood in Essaouira.",
    image:saouira
    },
  {
    id: 6,
    title: "Ouarzazate & Ait Ben Haddou",
    description:
      "Visit the famous Kasbah Ait Ben Haddou and the cinema city of Ouarzazate.",
    image:capton
  },
  {
    id: 7,
    title: "Ouzoud Waterfalls Day Trip",
    description:
      "Discover the highest waterfalls in Morocco surrounded by nature.",
    image:capton2,
  },
  {
    id: 8,
    title: "Agadir City Tour",
    description:
      "Visit Agadir Marina, Kasbah, Souk El Had and beautiful beaches.",
    image:agadir,
    },
];



const CardsSection = () => {
  return (
    <div className="cards-grid">
      {toursData.map((tour) => (
        <Card
          key={tour.id}
          title={tour.title}
          description={tour.description}
          image={tour.image}
        />
      ))}
    </div>
  );
};

export default CardsSection;
