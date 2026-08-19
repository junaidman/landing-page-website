'use client'

export function Footer() {
  const aiTools = [
    'Runway Gen-4',
    'Kling 2', 
    'Veo 3',
    'Higgsfield AI',
    'Hailuo Minimax 2',
    'Midjourney',
    'Leonardo AI',
    'Krea AI',
    'Runway',
    'Suno AI',
    'ElevenLabs'
  ]

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="font-bagel text-background text-3xl tracking-wider mb-4">
                JUNAID DEV
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                Revolutionizing video production with intelligent AI that understands 
                creativity, storytelling, and human emotion.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-6">
                {/* GitHub */}
                <a
                  href="https://github.com/junaidman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer text-background/80 hover:text-white flex items-center gap-2 text-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                {/* Portfolio */}
                <a
                  href="https://junaid-man.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer text-background/80 hover:text-white flex items-center gap-2 text-sm"
                >
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tools We Use Section */}
          <div className="col-span-12 md:col-span-8">
            <div>
              <h4 className="font-black text-2xl text-background mb-4">TOOLS WE USE</h4>
              
              {/* AI Tools Description */}
              <p className="text-background/70 text-base mb-8 leading-relaxed">
                We leverage the latest AI technology to deliver cutting-edge video production. 
                Our toolkit combines the best generative AI models for video, audio, and visual content creation.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {aiTools.map((tool, index) => (
                  <div
                    key={tool}
                    className="text-background/80 hover:text-background gentle-animation text-sm font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Simplified */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2025 JUNAID DEV. All rights reserved.
            </div>
            <div className="text-sm text-background/70">
              2847 HIGHLAND AVE. SUITE 310 BIRMINGHAM 35205, AL, USA
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}