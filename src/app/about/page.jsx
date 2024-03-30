import React from 'react'
import "./about.css"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      AboutPage
      {/* <div className="container">Hello from container</div>   == it will take the css from the global.css class and hence mutate the style of page*/}
      <div className={styles.container}>Hello from container .module.css</div>
    </div>
  )
}

export default AboutPage