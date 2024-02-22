import * as React from "react"

import NavBar from "../../components/NavBar"

import Footer from "../../components/Footer"

const PageNotFound = () => {
  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-y-scroll">
      <NavBar></NavBar>


      <div className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-200">Privacy Policy</h1>
        <div className="flex flex-col w-full max-w-4xl px-6 text-center">
          {/* Sub Heading */}
          <h2 className="mt-4 md:mt-8 text-2xl text-justify md:text-3xl text-neutral-900 dark:text-neutral-300">Data Collection and Utilization</h2>
          {/* Contents */}
          <p className="mt-4 md:mt-6 text-xl text-justify md:text-2xl text-neutral-800 dark:text-neutral-400">
            a. <b>Guild ID</b> and <b>Channel ID</b>: Counter collects guild and channel identifiers when users set up a counting channel. This information is essential for managing and customising counting settings in the designated channels.
            <br></br>
            b. <b>User ID</b>: Counter collects user identifiers to associate individual data with Discord accounts. This includes tracking counting statistics, owned fonts, voting activity, earned coins, and the number of counts per font.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-4xl px-6 text-center">
          {/* Sub Heading */}
          <h2 className="mt-4 md:mt-8 text-2xl text-justify md:text-3xl text-neutral-900 dark:text-neutral-300">Data Storage</h2>
          {/* Contents */}
          <p className="mt-4 md:mt-6 text-xl text-justify md:text-2xl text-neutral-800 dark:text-neutral-400">
            Counter Discord Bot uses MongoDB as its database system to store and manage user and guild data securely.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-4xl px-6 text-center">
          {/* Sub Heading */}
          <h2 className="mt-4 md:mt-8 text-2xl text-justify md:text-3xl text-neutral-900 dark:text-neutral-300">Contact Information for Service Concerns</h2>
          {/* Contents */}
          <p className="mt-4 md:mt-6 text-xl text-justify md:text-2xl text-neutral-800 dark:text-neutral-400">
            We are happy to resolve any concerns you may have. The best way to contact us is by joining our Discord support server and opening a Ticket in the #ticket channel.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-4xl px-6 text-center">
          {/* Sub Heading */}
          <h2 className="mt-4 md:mt-8 text-2xl text-justify md:text-3xl text-neutral-900 dark:text-neutral-300">Data Request and Removal Process</h2>
          {/* Contents */}
          <p className="mt-4 md:mt-6 text-xl text-justify md:text-2xl text-neutral-800 dark:text-neutral-400">
          You can use the command <a href="https://docs.counterbot.xyz/commands/deletedata" target="_blank" rel="noreferrer"><b>/deletedata</b></a> to delete all information related to your Discord account.
          <br></br>
          Please join our Discord support server and open a Ticket in the #ticket channel if you have any queries. Unfortunately, we cannot help you via external channels, as we cannot verify your identity reliably.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default PageNotFound

export const Head = () => <title>Privacy Policy</title>