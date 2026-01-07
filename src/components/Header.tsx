import { Link } from "react-router-dom"

export default function Header() {

  return (
    <header className="bg-gray-800 text-white p-4 items-center flex justify-between">
      <h1 className="text-2xl font-bold">Matthew Soegiono</h1>

      <div className="space-x-4 inline-flex">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </header>
  )
}