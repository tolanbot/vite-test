import PropTypes from 'prop-types'

export default function Profile({src, alt}){

    return (
        <>
        <h2>{`${alt}`}</h2>
        <img src={`${src}`} alt={`${alt}`}></img>
        </>
    );
  }

  Profile.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }