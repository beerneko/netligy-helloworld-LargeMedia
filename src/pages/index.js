import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `blue` }}>
    <Header headerText="Index Page" />
    <Link to="/about/">about</Link>
    <p>Yuri neko nya.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <img src="../images/peekingcat.jpg" style={{ width:`50%` }} alt="" />
    <img src="../images/beerneko.jpg" style={{ width:`20%` }} alt="" />
    <button class="primary-button">Click me</button>
    </div>
)
