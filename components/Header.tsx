import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="py-4 border-b border-gray-700">
        <nav className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            <a href="/." className="text-white-400 hover:text-yellow-400">
              Daniel Kotsugai Sarmento
            </a>
          </div>
          <ul className="flex space-x-8">
            <li>
              <a href="/curriculum" className="hover:text-yellow-400">
                Currículo
              </a>
            </li>
            <li>
              <a href="/projetos" className="hover:text-yellow-400">
                Projetos
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
