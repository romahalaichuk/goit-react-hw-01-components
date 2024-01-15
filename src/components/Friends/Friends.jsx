import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  const element = friends.map(({ avatar, id, name, isOnline }) => (
    <FriendsListItem
      key={id}
      id={id}
      isOnline={isOnline}
      name={name}
      avatar={avatar}
    />
  ));
  return <ul className={css.friendList}>{element}</ul>;
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
