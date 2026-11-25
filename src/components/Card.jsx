import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


function Card(props) {
    const {message,Heading,thumbnail,Go,iconText,iconKind}=props;
  return (
   
    <article className="roadmap-card">
      <div className="roadmap-card-image">
        {thumbnail ? <img src={thumbnail} alt="" /> : (
          <span className={`career-icon career-icon-${iconKind}`} aria-label={iconText}>
            {iconKind === "mern" && (
              <span className="career-logo-stack">
                <img src="/images/roadmap-icons/mongodb.svg" alt="" />
                <img src="/images/roadmap-icons/express.svg" alt="" />
                <img src="/images/roadmap-icons/react.svg" alt="" />
                <img src="/images/roadmap-icons/nodedotjs.svg" alt="" />
              </span>
            )}
            {iconKind === "fullstack" && (
              <span className="career-logo-stack">
                <img src="/images/roadmap-icons/react.svg" alt="" />
                <img src="/images/roadmap-icons/nodedotjs.svg" alt="" />
                <img src="/images/roadmap-icons/postgresql.svg" alt="" />
              </span>
            )}
            {iconKind === "frontend" && (
              <span className="career-logo-stack">
                <img src="/images/roadmap-icons/html5.svg" alt="" />
                <img src="/images/roadmap-icons/css.svg" alt="" />
                <img src="/images/roadmap-icons/javascript.svg" alt="" />
                <img src="/images/roadmap-icons/react.svg" alt="" />
              </span>
            )}
            {iconKind === "backend" && (
              <span className="career-logo-stack">
                <img src="/images/roadmap-icons/nodedotjs.svg" alt="" />
                <img src="/images/roadmap-icons/express.svg" alt="" />
                <img src="/images/roadmap-icons/postgresql.svg" alt="" />
              </span>
            )}
            {iconKind === "data" && (
              <span className="career-logo-stack">
                <img src="/images/roadmap-icons/python.svg" alt="" />
                <img src="/images/roadmap-icons/postgresql.svg" alt="" />
                <img src="/images/roadmap-icons/pandas.svg" alt="" />
              </span>
            )}
          </span>
        )}
      </div>
      <div className="roadmap-card-body">
        <h5>{Heading}</h5>
        <p>{message}</p>
      </div>
      <NavLink className="roadmap-card-action" to={Go}>Search <span aria-hidden="true">→</span></NavLink>
    </article>
  )
}

export default Card

Card.propTypes = {
  message: PropTypes.string.isRequired,
  Heading: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  Go: PropTypes.string.isRequired,
  iconText: PropTypes.string,
  iconKind: PropTypes.string,
}
