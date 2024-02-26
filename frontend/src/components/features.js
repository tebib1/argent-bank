
 const Features = ({ imgSrc, title, text }) => (
  <div className="feature-item">
    <img class="feature-icon" src={imgSrc} alt={title} />
    <h2 class="feature-item-title">{title}</h2>
    <p>{text}</p>
  </div>
);

export default Features