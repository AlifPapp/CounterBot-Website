import * as React from "react"

import NavBar from "../../components/NavBar"

import Footer from "../../components/Footer"

const PageNotFound = () => {
  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-y-scroll">
      <NavBar></NavBar>

      {/* Page Not Found */}
      <div className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-200">Page not found</h1>
        {/* Home Button */}
        <div className="mt-8 mb-4 md:mt-14">
          <a href="/"
            className="flex flex-row items-center justify-center px-4 md:px-6 py-3 md:py-4 text-base md:text-lg font-medium text-white rounded-lg bg-indigo-600 hover:bg-indigo-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </a>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default PageNotFound

export const Head = () => <title>404 Not found</title>