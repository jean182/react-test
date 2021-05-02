import { MESSAGES } from "../../constants"

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container p-5 d-flex justify-content-between align-items-center">
        <span className="text-light">{MESSAGES.MADE_BY}</span>
        <span className="text-light">{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
