import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <h1 className="main-heading">
      <Link to="/">
        <>
          <span style={{ color: "#d1dce5", fontSize: "25px" }}>rodgeTech</span>
          {title}
        </>
      </Link>
    </h1>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>

      <footer>
        <hr />

        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> - Contact{" "}
          <a href="mailto:rodgetech@gmail.com">rodgetech@gmail.com</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
