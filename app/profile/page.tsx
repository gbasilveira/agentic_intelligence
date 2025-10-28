import ParticleBackground from "@/components/particle-background"
import ProfileForm from "@/components/profile-form"

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full bg-background relative overflow-hidden py-16 md:py-24">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="container max-w-4xl py-12 ">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-poppins">Profile</h1>
              <p className="text-muted-foreground mt-2">
                Manage your personal information and how it appears to the community.
              </p>
            </div>
            <ProfileForm />
          </div>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
    </main>
  )
}
