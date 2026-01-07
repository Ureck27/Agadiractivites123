export default function PartnerCard({ img, alt, link }) {
  return (
    <a href={link} className="partner-card" target="_blank" rel="noreferrer">
      <img src={link} alt={alt} />
    </a>

  );
}
