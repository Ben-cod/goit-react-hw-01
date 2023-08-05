import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import {generateRandomColor} from '../RandomColor.js'



    
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
      <li className={css.item} key={id} style={{ backgroundColor: generateRandomColor() }}>
        <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };
  




// FriendListItem.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.shape({
//         avatar: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired
//       })).isRequired,  
    
    
// }
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };