import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(fr => (
        <li key={fr.id} className={s.item}>
          <FriendData
            avatar={fr.avatar}
            name={fr.name}
            isOnline={fr.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

const FriendData = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span
          className={s.status}
          style={{ backgroundColor: '#00ca2c' }}
        ></span>
      ) : (
        <span
          className={s.status}
          style={{ backgroundColor: '#ca0000' }}
        ></span>
      )}
      <img src={avatar} alt={name} className={s.avatar} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
};

FriendData.defaultProps = {
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCDhWBXzqjtjvTRDcwY6oDRYGuuFHAc1B1nvlj86E6q4lt6n3dtd7yBADXafIKxeOjVE&usqp=CAU',
  name: 'Имя пользователя',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default FriendList;
