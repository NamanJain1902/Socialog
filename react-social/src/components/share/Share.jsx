import "./Share.css";
import { PermMedia, EmojiEmotions, Room} from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share__container">
      <div className="share__container__content">
        <div className="share__content__top">
          <img className="share__profile__img" src="/assets/member-2.png"/>
          <input
            className="share__input"
            placeholder="What's in your mind OO7?"
          />
        </div>
        <hr className="share__hr"/>
        <div className="share__content__bottom">
          <div className="share__options">
            <div className="share__option">
              <Room htmlColor="blue" className="share__option__icon"/>
              <span className="share__option__text">Location</span>
            </div>
            <div className="share__option">
              <PermMedia htmlColor="tomato" className="share__option__icon"/>
              <span className="share__option__text">Share Photo/Video</span>
            </div>
            <div className="share__option">
              <EmojiEmotions htmlColor="goldenrod" className="share__option__icon"/>
              <span className="share__option__text">Feeling</span>
            </div>
          </div>
          <button className="share__bottom__button">Share</button>
        </div>
      </div>
    </div>
  )
}
