import PropTypes from "prop-types";

export default function Profile({ src, alt }) {
  return (
    <div className="profile">
      <h2>{`${alt}`}</h2>
      <img src={`${src}`} alt={`${alt}`}></img>
    </div>
  );
}

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
