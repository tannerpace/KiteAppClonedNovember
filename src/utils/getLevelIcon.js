import { FaUserAstronaut, FaUserGraduate, FaUserNinja } from "react-icons/fa"

//a function that returns the icon for the level
export default function getLevelIcon(level) {
  switch (level) {
    case "beginner":
      return <FaUserNinja />
    case "intermediate":
      return <FaUserAstronaut />
    case "advanced":
      return <FaUserGraduate />
    default:
      return <FaUserNinja />
  }
}
