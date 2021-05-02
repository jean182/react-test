import { MESSAGES } from "../../constants"

export default function Header() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">{MESSAGES.TITLE}</span>
        </div>
      </nav>
    </header>
  )
}
