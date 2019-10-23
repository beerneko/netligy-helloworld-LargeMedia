import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `blue` }}>
    <Header headerText="Index Page" />
    <Link to="/contact/">Contact</Link>
    <p>Such wow. Very React.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <img src="https://source.unsplash.com/user/beerneko/400x200" alt="" />
    <button class="primary-button">Click me</button>
    </div>
)
