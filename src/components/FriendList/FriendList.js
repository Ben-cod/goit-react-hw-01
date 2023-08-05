import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import {FriendListItem} from '../FriendList/FriendListItem.js'


export const FriendList = ({ friends }) => {
    return (
      <div className={css.wrap}>
        <ul className={css.friendList}>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id} />
            
          ))}
        </ul>
      </div>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
      })).isRequired,  
}
