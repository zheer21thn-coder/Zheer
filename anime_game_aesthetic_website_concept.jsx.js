export default function AnimeGameAestheticWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20" />

      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-[0.2em]">ZHEER</h1>

        <nav className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Character</a>
          <a href="#" className="hover:text-white transition">Gallery</a>
          <a href="#" className="hover:text-white transition">Community</a>
        </nav>
      </header>

      <section className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-8 lg:px-20 py-20">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6 backdrop-blur-md">
            Anime • Gaming • Futuristic
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            NEXT LEVEL
            <span className="block text-cyan-400">AESTHETIC</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-xl text-lg leading-relaxed">
            Website bertema anime dan game dengan nuansa futuristic cyber aesthetic, cocok untuk profile, komunitas gaming, store, atau showcase konten.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Explore
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              View Gallery
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />

          <img
            src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop"
            alt="gaming"
            className="relative rounded-[2rem] shadow-2xl border border-white/10 object-cover w-full max-w-md h-[500px]"
          />
        </div>
      </section>

      <section className="relative z-10 px-8 lg:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Anime Style',
              desc: 'Visual clean dengan nuansa anime Jepang modern.',
            },
            {
              title: 'Gaming UI',
              desc: 'Interface futuristic seperti game AAA dan cyberpunk.',
            },
            {
              title: 'Responsive',
              desc: 'Tetap keren di HP maupun desktop.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-4 text-cyan-300 text-xl">
                ✦
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-white/40 text-sm">
        © 2026 Zheer Anime Gaming Website
      </footer>
    </div>
  )
}
