import React from "react"

import logo from "../images/icon.png"

import UseTheme from "../hooks/UseTheme";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const [flyer, setFlyer] = React.useState(false);
    const [enabledTheme, setTheme] = UseTheme();

    return (
        <navbar className="fixed top-0 w-full z-50">
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white dark:bg-black">
                    <div className="flex justify-between items-center border-b-2 border-neutral-200 dark:border-neutral-50 py-6 md:justify-start md:space-x-10">
                        {/* Logo */}
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/" className="flex col items-center">
                                <img
                                    className="h-10 w-auto"
                                    src={logo}
                                    alt=""
                                />
                                <span className="pl-2 text-2xl font-bold text-indigo-600">Counter</span>
                            </a>
                        </div>
                        {/* Mobile menu */}
                        <div className="justify-end -my-2 md:hidden space-x-4">
                            {/* Light/Dark Mode Toggle */}
                            <button onClick={() => setTheme(!enabledTheme)}
                                className="inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-full bg-indigo-600 hover:bg-indigo-800">
                                {enabledTheme ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162z" clip-rule="evenodd" />
                                    </svg>
                                )}
                            </button>
                            {/* Mobile menu button */}
                            <button onClick={() => setOpen(!open)}
                                className="rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-200 focus:outline-none">
                                {/* Heroicon: menu */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        {/* Center Buttons */}
                        <nav className="hidden md:flex space-x-10">
                            {/* Vote Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    className="group rounded-md text-neutral-500 dark:text-neutral-400 inline-flex items-center text-base font-medium hover:text-neutral-900 dark:hover:text-neutral-200 focus:outline-none pb-8'"
                                    onClick={() => (setFlyer(!flyer))}
                                >
                                    <span>Vote</span>
                                    {/* Heroicon: chevron-down */}
                                    <svg
                                        className={
                                            flyer === true
                                                ? "transform rotate-180 ml-2 h-5 w-5  transition ease-out duration-200 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200"
                                                : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200"
                                        }
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button onMouseLeave={() => setFlyer(false)}
                                    className={
                                        flyer
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-[14rem] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " opacity-0 pointer-events-none translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }>
                                    <div className="rounded-lg shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white dark:bg-black px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="https://top.gg/bot/430340956865298432" target="_blank" rel="noopener noreferrer"
                                                className="-m-3 p-3 flex items-start rounded-lg text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900">
                                                {/* top.gg icon */}
                                                <svg viewBox="120 120 580 580" fill="currentColor" className="w-6 h-6">
                                                    <path d="M655.711 247H330.71V572H397.113C422.599 572 447.042 561.876 465.064 543.854C483.086 525.832 493.21 501.389 493.21 475.902V409.5H559.613C585.099 409.5 609.542 399.375 627.564 381.354C645.586 363.332 655.711 338.889 655.711 313.402V247Z"></path><path fill="currentColor" d="M144 247H306.5V409.5H193.657C180.531 409.5 167.943 404.286 158.661 395.004C149.379 385.722 144.165 373.134 144.165 360.008L144 247Z"></path>
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-neutral-900 dark:text-white">
                                                        Top.gg
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="https://discordbotlist.com/bots/counter-9108" target="_blank" rel="noopener noreferrer"
                                                className="-m-3 p-3 flex items-start rounded-lg text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900">
                                                {/* discordbotlist icon */}
                                                <svg viewBox="0 0 500 500" width="24" fill="currentColor" >
                                                    <path d="M497.1 318.5c-5.1-33.7-19.2-93.2-58.3-143.4-4.3-13.1-13.1-33.2-30.4-47.9 5.3-9.6 12.7-24.5 16.9-40.1-.6 0-1.1.1-1.7.1-3.6 0-7-.7-10.2-1.8-3.7 13.2-9.6 25.7-14.4 34.9-12-7.5-27.1-12.4-46.1-12.2-28.9-12.5-63.2-20.3-104.3-20.9h-1c-40.4.6-74.3 8.4-102.6 20.9-19.3-.3-34.7 4.6-46.7 12.2-4.9-9.2-10.7-21.7-14.4-34.9-3.2 1.2-6.6 1.8-10.2 1.8-.6 0-1.1-.1-1.7-.1 4.2 15.6 11.6 30.5 16.9 40.1-19.3 16.5-28.1 39.5-31.7 52.2C21.1 228.7 7.8 285.8 2.9 318.5c-3.1 21 1.9 42.4 14.1 59.5 60.5 84.3 217.3 92.5 230.6 93.1h1c13.4-.5 172.6-8.8 234.1-93.1 12.5-17.1 17.5-38.5 14.4-59.5zm-61.8 38.7c-49.3 53.2-177 58.4-187.8 58.8h-.8c-10.7-.3-136.4-5.6-185-58.8-9.9-10.8-13.8-24.3-11.3-37.5 7.8-41.2 42.6-144.1 196.4-146h.8c156 1.9 191.4 104.8 199.3 146 2.4 13.2-1.6 26.7-11.6 37.5z" />
                                                    <path d="M183.6 269.7c-32.5-11-50.3-1.4-60.1 8.2-7.2 7-8.6 18.3-3.2 26.7 5.8 9.1 18.2 20.1 44.7 28 52.8 15.7 59-17.3 59-17.3s10.8-28.3-40.4-45.6zm129.9 0c-51.6 17.3-40.7 45.6-40.7 45.6s6.3 33 59.4 17.3c26.6-7.9 39.1-18.9 45-28 5.5-8.5 4-19.7-3.2-26.7-9.8-9.6-27.8-19.2-60.5-8.2z" />
                                                    <ellipse cx="73.7" cy="56.4" rx="27.2" ry="27.5" />
                                                    <ellipse cx="423.5" cy="56.4" rx="27.2" ry="27.5" />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-neutral-900 dark:text-white">
                                                        Discord Bot List
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            {/* Support Button */}
                            <a
                                href="https://discord.gg/fnBrAqGDbu" target="_blank" rel="noopener noreferrer"
                                className="text-base font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                            >
                                Support
                            </a>
                            {/* Documentation Button */}
                            <a
                                href="https://docs.counterbot.app/" target="_blank" rel="noopener noreferrer"
                                className="text-base font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                            >
                                Documentation
                            </a>
                        </nav>
                        {/* End buttons */}
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-5">
                            {/* Add Bot Button */}
                            <a href="https://discord.com/api/oauth2/authorize?client_id=430340956865298432&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center h-10 px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800">
                                Add Bot
                            </a>
                            {/* Light/Dark Mode Toggle */}
                            <button onClick={() => setTheme(!enabledTheme)}
                                className="inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-full bg-indigo-600 hover:bg-indigo-800">
                                {enabledTheme ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162z" clip-rule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            : "opacity-0 pointer-events-none scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }>
                    <div className="rounded-lg px-2 shadow-lg ring-1 ring-black dark:ring-neutral-800 ring-opacity-5 bg-white dark:bg-black divide-y-2 divide-neutral-200 dark:divide-neutral-50">
                        {/* Header */}
                        <div className="pt-4 pb-6 flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="/" className="flex col items-center">
                                    <img
                                        className="h-10 w-auto"
                                        src={logo}
                                        alt=""
                                    />
                                    <span className="pl-2 text-2xl font-bold text-indigo-600">Counter</span>
                                </a>
                            </div>
                            <div className="justify-end space-x-4">
                                {/* Light/Dark Mode Toggle */}
                                <button onClick={() => setTheme(!enabledTheme)}
                                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-full bg-indigo-600 hover:bg-indigo-800">
                                    {enabledTheme ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162z" clip-rule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                                {/* Close Button */}
                                <button onClick={() => setOpen(!open)}
                                    className="rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-200 focus:outline-none">
                                    {/* Heroicon: outline/x */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Center Buttons */}
                        <div className="pt-5 pb-5 px-5">
                            <nav className="grid gap-y-8">
                                {/* Vote Button */}
                                <button
                                    type="button"
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                    onClick={() => (setFlyer(!flyer))}>
                                    {/* Heroicon: star */}
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-200">
                                        Vote
                                    </span>
                                </button>
                                {/* Vote sub Buttons */}
                                <div className={
                                    flyer ?
                                        "opacity-100 translate-y-0 transition ease-out duration-200 z-10 grid gap-y-8"
                                        :
                                        "opacity-0 translate-y-1 absolute -z-10 grid gap-y-8"}>
                                    {/* Top.gg */}
                                    <a href="https://top.gg/bot/430340956865298432" target="_blank" rel="noopener noreferrer"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900">
                                        {/* top.gg icon */}
                                        <svg viewBox="120 120 580 580" fill="currentColor" className="w-6 h-6">
                                            <path d="M655.711 247H330.71V572H397.113C422.599 572 447.042 561.876 465.064 543.854C483.086 525.832 493.21 501.389 493.21 475.902V409.5H559.613C585.099 409.5 609.542 399.375 627.564 381.354C645.586 363.332 655.711 338.889 655.711 313.402V247Z"></path><path fill="currentColor" d="M144 247H306.5V409.5H193.657C180.531 409.5 167.943 404.286 158.661 395.004C149.379 385.722 144.165 373.134 144.165 360.008L144 247Z"></path>
                                        </svg>

                                        <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-200">
                                            Top.gg
                                        </span>
                                    </a>
                                    {/* Discordbotlist */}
                                    <a href="https://discordbotlist.com/bots/counter-9108" target="_blank" rel="noopener noreferrer"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900">
                                        {/* discordbotlist icon */}
                                        <svg viewBox="0 0 500 500" width="24" fill="currentColor" >
                                            <path d="M497.1 318.5c-5.1-33.7-19.2-93.2-58.3-143.4-4.3-13.1-13.1-33.2-30.4-47.9 5.3-9.6 12.7-24.5 16.9-40.1-.6 0-1.1.1-1.7.1-3.6 0-7-.7-10.2-1.8-3.7 13.2-9.6 25.7-14.4 34.9-12-7.5-27.1-12.4-46.1-12.2-28.9-12.5-63.2-20.3-104.3-20.9h-1c-40.4.6-74.3 8.4-102.6 20.9-19.3-.3-34.7 4.6-46.7 12.2-4.9-9.2-10.7-21.7-14.4-34.9-3.2 1.2-6.6 1.8-10.2 1.8-.6 0-1.1-.1-1.7-.1 4.2 15.6 11.6 30.5 16.9 40.1-19.3 16.5-28.1 39.5-31.7 52.2C21.1 228.7 7.8 285.8 2.9 318.5c-3.1 21 1.9 42.4 14.1 59.5 60.5 84.3 217.3 92.5 230.6 93.1h1c13.4-.5 172.6-8.8 234.1-93.1 12.5-17.1 17.5-38.5 14.4-59.5zm-61.8 38.7c-49.3 53.2-177 58.4-187.8 58.8h-.8c-10.7-.3-136.4-5.6-185-58.8-9.9-10.8-13.8-24.3-11.3-37.5 7.8-41.2 42.6-144.1 196.4-146h.8c156 1.9 191.4 104.8 199.3 146 2.4 13.2-1.6 26.7-11.6 37.5z" />
                                            <path d="M183.6 269.7c-32.5-11-50.3-1.4-60.1 8.2-7.2 7-8.6 18.3-3.2 26.7 5.8 9.1 18.2 20.1 44.7 28 52.8 15.7 59-17.3 59-17.3s10.8-28.3-40.4-45.6zm129.9 0c-51.6 17.3-40.7 45.6-40.7 45.6s6.3 33 59.4 17.3c26.6-7.9 39.1-18.9 45-28 5.5-8.5 4-19.7-3.2-26.7-9.8-9.6-27.8-19.2-60.5-8.2z" />
                                            <ellipse cx="73.7" cy="56.4" rx="27.2" ry="27.5" />
                                            <ellipse cx="423.5" cy="56.4" rx="27.2" ry="27.5" />
                                        </svg>

                                        <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-200">
                                            Discord Bot List
                                        </span>
                                    </a>
                                </div>
                                {/* Support Button */}
                                <a href="https://discord.gg/fnBrAqGDbu" target="_blank" rel="noopener noreferrer"
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900">
                                    {/* Heroicon name: chat bubble */}
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>

                                    <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-200">
                                        Support
                                    </span>
                                </a>
                                {/* Documentation Button */}
                                <a href="https://docs.counterbot.app/" target="_blank" rel="noopener noreferrer"
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900">
                                    {/* Heroicon name: outline/shield-check */}
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>

                                    <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-200">
                                        Doccumentation
                                    </span>
                                </a>
                            </nav>
                        </div>
                        {/* Add Bot Button */}
                        <div className="py-5 px-5 space-y-6">
                            <div>
                                <a href="https://discord.com/api/oauth2/authorize?client_id=430340956865298432&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800">
                                    Add Bot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default NavBar;