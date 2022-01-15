import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <>
            <span style={{ color: "#d1dce5", fontSize: "30px" }}>
              rodgeTech
            </span>
            {title}
          </>
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <span style={{ color: "#d1dce5", fontSize: "25px" }}>rodgeTech</span>
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <hr />
      <footer>
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
