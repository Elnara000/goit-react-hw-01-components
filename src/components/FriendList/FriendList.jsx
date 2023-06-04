import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList({ items }) {
  return (
    <ul className={css.friend_list}>
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
