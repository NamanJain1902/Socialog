import Share from "../share/Share"
import "./Feed.css"

export default function Feed() {
  return (
    <div className="feed__container">
      <div className="feed__container__content">
        <Share/>
      </div>
    </div>
  )
}
