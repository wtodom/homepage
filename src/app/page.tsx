export default function Home() {
  return (
    <main>
      <WelcomeText />
    </main>
  );
}

function WelcomeText() {
  return (
    <div className="container m-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <p className="py-6">
              <span className="font-serif text-7xl text-yellow-200">Welcome</span> <span className="text-xl pl-2"> to</span><br />
              <span className="text-9xl font-bold">Weston Odom</span><span className="text-xl">&apos;s</span><br />
              <span className="flex">
                <span className="text-xs text-red-400 self-center">(very)</span><span className="font-mono text-green-400 text-6xl pl-2 pr-4">over-engineered</span><span className="text-6xl flex center-items">homep<HomeIcon />ge.</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomeIcon() {
  return (
    <svg style={{ width: "48px", height: "48px", alignSelf:"center" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
    </svg>
  )
}
