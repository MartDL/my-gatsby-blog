import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, siteTitle, para, heading, nav, navLinkItem, navLinkText, navLinks } from './layout.module.css'



const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)

    console.log(data)
  return (
    <div className={container}>
           <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav className={nav}>
          <ul className={navLinks}>
          <li className={para}><Link to="/">Home</Link></li>
          <li className={heading}><Link to="/about">About</Link></li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout