export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-background to-muted/20 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            PublishX
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We&apos;re building something amazing. An AI-powered platform to
            help you effortlessly create, schedule, and publish content across
            all your favorite platforms.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold mb-1">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">
              Smart content creation
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold mb-1">Smart Scheduling</h3>
            <p className="text-sm text-muted-foreground">
              Plan ahead effortlessly
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
            <div className="text-2xl mb-2">🌐</div>
            <h3 className="font-semibold mb-1">Multi-Platform</h3>
            <p className="text-sm text-muted-foreground">
              All platforms, one place
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-muted-foreground pt-8">
          Stay tuned for updates. We&apos;re working hard to bring you the best
          publishing experience.
        </p>
      </div>
    </div>
  );
}
