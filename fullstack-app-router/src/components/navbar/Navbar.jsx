import Link from 'next/link'
import React from 'react'

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio", // portfolio section has a URL of /portfolio
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog", //blog section has a URL of /blog
    },
    {
      id: 4,
      title: "About",
      url: "/about", //  about section has a URL of /about
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact", //  contact section has a URL of /contact
    },
    {
      id: 6,
      title: "Dashboard", //  dashboard section has an ID of 6 and URL of /dashboard
      url: "/dashboard",
    },
  ];
  

const Navbar = () => {
  return (
    <div>
        <Link href='/'>Amiandah</Link>
    <div>
        {links.map(link=>
            <Link key={link.id} href={link.url}>{link.title}</Link>
        )}
    </div>
    </div>
  )
}

export default Navbar