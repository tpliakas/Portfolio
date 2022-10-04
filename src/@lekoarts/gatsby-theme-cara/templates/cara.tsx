import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"

const Cara = () => (
  <Layout>
    <Parallax pages={4}>
      <nav>
        <ul className="menu-ul">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={1} />
      <About offset={2} factor={1} />
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
