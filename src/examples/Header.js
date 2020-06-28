import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site(siteMetadata: {}) {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title : {title} </h1>
      <h1>age : {age}</h1>
    </div>
  )
}

export default Header
