import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    // <div className={[s.red, online ? s.online : s.offline]} key={tag}></div>
    <div className={styles.section_profile} key={tag}>
      <div className={[styles.description]}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={[styles.stats]}>
        <li>
          <span className="label">Followers: </span>
          <span className={styles.nolist}>{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
