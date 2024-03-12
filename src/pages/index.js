import * as React from "react"

import "./index.css"

import NavBar from "../components/NavBar"

import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-scroll">
      <NavBar></NavBar>

      {/* Heading */}
      <section className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        <div className="flex flex-col w-full max-w-4xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-200">
            <span>Count and collect fonts with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-600">
              Counter
            </span>
          </h1>
          <p className="mt-4 md:mt-12 text-xl md:text-2xl text-neutral-600 dark:text-neutral-400">
            Your Advanced Counting Bot, with Fun Game Modes, Easy Channel Setup, and Font Customization.
          </p>
          <div className="mt-8 mb-4 md:mt-14">
            <a href="https://discord.com/api/oauth2/authorize?client_id=430340956865298432&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer"
              className="px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-800">
              Invite Counter
            </a>
          </div>
        </div>
      </section>

      {/* 3 steps*/}
      <section className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        <div className="flex flex-col w-full max-w-2xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-200">
            <span>3 Steps</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-neutral-600 dark:text-neutral-400">
            Counter is easy to setup and use. Just follow these 3 steps.
          </p>
        </div>
        <div className="mt-4 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: plus */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <h4>Invite Counter</h4>
              <p>Invite Counter to your server to get started.</p>
              <a href="https://discord.com/api/oauth2/authorize?client_id=430340956865298432&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">Invite Counter</a>
            </div>
            {/* Step 2 */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: cog-6-tooth */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4>Setup Counter</h4>
              <p>Setup Counter by inputing the command <code>/setup</code> in your server.</p>
              <a href="https://docs.counterbot.xyz/commands/setup">Setup Counter</a>
            </div>
            {/* Step 3 */}
            <div className="feature-box max-w-sm px-4 py-6 md:px-6 md:py-8">
              <div className="feature-box-icon">
                {/* Heroicon: play */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
              <h4>Enjoy Counter</h4>
              <p>Check out the documentation for a list of commands.</p>
              <a href="https://docs.counterbot.xyz/">Documentation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features*/}
      <section className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        <div className="flex flex-col w-full max-w-2xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-200">
            <span>Features</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-neutral-600 dark:text-neutral-400">
            Unleash Counting's Full Potential with These Outstanding Features.
          </p>
        </div>
        <div className="mt-4 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Effortless Setup */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: cog-6-tooth */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4>Effortless Setup</h4>
              <p>Customize Your Counting Experience with Ease.</p>
            </div>
            {/* Flexible Starting Points */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: arrow-path */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

              </div>
              <h4>Flexible Starting Points</h4>
              <p>Begin Counting from Any Number of Your Choice.</p>
            </div>
            {/* Versatile Intervals */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: calculator */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
              </div>
              <h4>Versatile Intervals</h4>
              <p>Count Up, Down, or in Custom Increments.</p>
            </div>
            {/* Balanced Counting */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: user */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h4>Balanced Counting</h4>
              <p>Encourage Equal Participation by Enforcing Alternate Turns.</p>
            </div>
            {/* Stylish Fonts */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: cube-transparent */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
              </div>
              <h4>Stylish Fonts</h4>
              <p>Express Yourself with a Variety of Font Options.</p>
            </div>
            {/* Textual Commentary */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: chat-bubble-bottom-center-text */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h4>Textual Commentary</h4>
              <p>Add Your Thoughts and Comments While Counting.</p>
            </div>
            {/* Diverse Game Modes */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: puzzle-piece */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
              </div>
              <h4>Diverse Game Modes</h4>
              <p>Discover Multiple Unique and Exciting Game Variations.</p>
            </div>
            {/* Competitive Rankings */}
            <div className="feature-box">
              <div className="feature-box-icon">
                {/* Heroicon: trophy */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h4>Competitive Rankings</h4>
              <p>Engage in Friendly Competition with Server-Based Leaderboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Youtube Video */}
      <section className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        <div className="flex flex-col w-full max-w-2xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-200">
            <span>Showcase</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-neutral-600 dark:text-neutral-400">
            Watch the video below to see Counter in action.
          </p>
        </div>
        <div className="mt-6 md:mt-8">
          <iframe class="max-w-full max-h-[calc(100vw/1.777777777777778)]" width="854" height="480" src="https://www.youtube.com/embed/MY1hfWA_V3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Counter</title>
