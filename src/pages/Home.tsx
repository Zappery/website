export default function Home() {

  return (
  <>
    <div className="p-4" style={{ backgroundColor: 'white' }}>
      {/* <h2 className="text-3xl font-semibold mb-4" style={{ color: '#EBFCFB' }}>Welcome to My Portfolio</h2>
      <p className="mb-2" style={{ color: '#EBFCFB' }}>
        Hi! I'm Matthew Soegiono, a software engineer student at UNSW. Explore my projects and get to know more about me.
      </p>
      <p style={{ color: '#EBFCFB' }}>
        Feel free to navigate through the site using the links above to learn more about my work and background.
      </p> */}
      <h1 className="text-3xl font-semibold mb-4">
        Matthew<br />
        Soegiono
      </h1>

      <ul className="grid grid-cols-1">
        <li className="flex items-center">
          <input
            type="radio"
            id="about"
            className="peer h-4 w-4 cursor-pointer flex-shrink-0 accent-black"
            name="page"
          />
          <label
            htmlFor="about"
            className="block cursor-pointer pl-4"
          >
            <div className="font-medium text-xl">About</div>
          </label>
        </li>

        <li className="flex items-center">
          <input
            type="radio"
            id="projects"
            className="peer h-4 w-4 cursor-pointer flex-shrink-0 accent-black"
            name="page"
          />
          <label
            htmlFor="projects"
            className="block cursor-pointer pl-4"
          >
            <div className="font-medium text-xl">Projects</div>
          </label>
        </li>

        <li className="flex items-center">
          <input
            type="radio"
            id="contact"
            className="peer h-4 w-4 cursor-pointer flex-shrink-0 accent-black"
            name="page"
          />
          <label
            htmlFor="contact"
            className="block cursor-pointer pl-4"
          >
            <div className="font-medium text-xl">Contact</div>
          </label>
        </li>
      </ul>
    </div>
  </>
  )
}