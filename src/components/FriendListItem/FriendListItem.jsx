import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import defaultImage from '../Profile/default.jpg';

export function FriendListItem({ avatar = defaultImage, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
