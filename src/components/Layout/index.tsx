import Footer from "../Footer"
import Header from "../Header"

import { Props } from "./Layout.interfaces"

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
    </>
  )
}
