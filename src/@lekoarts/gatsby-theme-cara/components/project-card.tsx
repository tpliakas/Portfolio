/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: "100%",
      minWidth: 300,
      maxWidth: 600,
      margin: " 0 auto",
    }}
  >
    <figure className="text-hover-img">
      <img src={bg} alt="A small fluffy dog" />
      {children}
    </figure>
  </a>
)

export default ProjectCard
