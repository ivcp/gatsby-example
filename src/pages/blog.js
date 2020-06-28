import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nam
          quas modi fuga maxime, animi ullam earum dolorum magnam ducimus autem
          repudiandae eveniet omnis eos natus sequi in quisquam. Dolor.
        </p>
      </div>
    </Layout>
  )
}

export default blog
