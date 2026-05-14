import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const navItems = [
    { id: 'about', label: 'About', link: '/about' },
    { id: 'projects', label: 'Projects', link: '/projects' },
    { id: 'contact', label: 'Contact', link: '/contact' },
  ];

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

      {/* Navigation Items */}
      {/*
        Need to group the HashLink as a label for the radio button
      */}
      <ul className="grid grid-cols-1">
        {navItems.map((item) => (
          <li key={item.id} className="flex items-center">
            <input
              type="radio"
              id={item.id}
              className="peer h-4 w-4 cursor-pointer flex-shrink-0 accent-black"
              name="page"
              checked={activeTab === item.id}
              onChange={() => setActiveTab(item.id)}
            />
            <label
              htmlFor={item.id}
              className="block cursor-pointer pl-4"
            >
              <div className="font-medium text-xl"><HashLink smooth to={item.link} onClick={() => setActiveTab(item.id)}>
                {item.label}
              </HashLink></div>
            </label>
          </li>
        ))}

        {/* <li className="flex items-center">
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
            <div className="font-medium text-xl"><HashLink smooth to="/#projects">Projects</HashLink></div>
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
            <div className="font-medium text-xl"><HashLink smooth to="/#contact">Contact</HashLink></div>
          </label>
        </li> */}
      </ul>
    </div>
  </>
  )
}