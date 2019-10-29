import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="Tendemo 8ppun" />
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
    <Link to="/">home</Link>
 </div>
)