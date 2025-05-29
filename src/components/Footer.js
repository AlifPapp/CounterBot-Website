import React from "react"

import logo from "../images/icon.png"

const Footer = () => {
    return (
        <footer className="snap-always snap-start flex flex-col items-center">
            <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-left pb-4 mx-2 border-b-2 border-neutral-200 dark:border-neutral-50">
                {/* headings */}
                <div className="max-w-xs">
                    <a href="/" className="flex col items-center">
                        <img
                            className="h-6 md:h-8 w-auto"
                            src={logo}
                            alt=""
                        />
                        <span className="pl-[0.125rem] md:pl-1 text-lg md:text-xl font-bold text-indigo-600">Counter</span>
                    </a>
                </div>
                <div className="flex flex-col justify-end min-w-max text-xs md:text-sm text-neutral-800 dark:text-neutral-400">
                    <h1 className="font-bold">Policies</h1>
                </div>
                <div className="flex flex-col justify-end min-w-max text-xs md:text-sm text-neutral-800 dark:text-neutral-400">
                    <h1 className="font-bold align-bottom">Links</h1>
                </div>
                {/* text */}
                <div className="max-w-xs text-xs md:text-sm text-neutral-800 dark:text-neutral-400">
                    <p>
                        Count and collect emojis with Counter. As you count higher, earn coins to unlock new fonts.
                    </p>
                </div>
                <div className="flex flex-col min-w-max text-xs md:text-sm text-neutral-800 dark:text-neutral-400">
                    <a href="/terms-of-service" className="hover:text-black dark:hover:text-neutral-200">Terms of Service</a>
                    <a href="/privacy-policy" className="hover:text-black dark:hover:text-neutral-200">Privacy Policy</a>
                </div>
                <div className="flex flex-col min-w-max text-xs md:text-sm text-neutral-800 dark:text-neutral-400">
                    <a href="https://docs.counterbot.app/"
                        className="hover:text-black dark:hover:text-neutral-200">Documentation</a>
                    <a href="https://discord.gg/fnBrAqGDbu" target="_blank" rel="noreferrer"
                        className="hover:text-black dark:hover:text-neutral-200">Support</a>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=430340956865298432&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noreferrer"
                        className="hover:text-black dark:hover:text-neutral-200">Invite Counter</a>
                </div>
            </div>
            {/* Creator ref */}
            <div className="justify-center w-full my-4 text-center">
                <p className="text-sm text-neutral-800 dark:text-neutral-400">
                    Made by <a className="hover:text-black dark:hover:text-neutral-200" href="https://alifpapp.me/">Alif Papp</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;