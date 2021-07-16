import "./Topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <div className="topbar__left__content">
          <div className="topbar__left__logo">
            <a href="" ><span>S</span>ocialog</a>
          </div>
        </div>
      </div>
      <div className="topbar__center">
        <div className="topbar__center__content">
          <div className="searchbar">
            <Search className="search__icon"/>
            <input
              className="search__input"
              placeholder="search friend, post or hashtag"
            />
          </div>
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__right__content">
          <ul>
            <li><a href="#"><Person/></a></li>
            <li><a href="#"><Chat/></a></li>
            <li><a href="#"><Notifications/></a></li>
          </ul>

          <div className="topbar__profile">
            <img className="topbar__profile__img" src="" alt="profile image"/>
            <span>Full Name</span>
          </div>

        </div>
      </div>
    </div>
  )
}
