import {
  CameraIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"
import { Metadata } from "next"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const userData = {
  name: "Y. Siva Sai Krishna",
  image: "https://github.com/ysskrishna.png",
  bio: "I'm a dynamic Full Stack Developer, Founding Engineer, and an IITM graduate from Bengaluru, India, who loves building cutting-edge web and mobile applications.",
  email: "sivasaikrishnassk@gmail.com",
  website: "https://bento.me/ysskrishna",
  github: "https://github.com/ysskrishna",
  linkedin: "https://linkedin.com/in/ysskrishna",
  producthunt: "https://www.producthunt.com/@ysskrishna",
  youtube: "https://www.youtube.com/@ysskrishna",
}

export const metadata: Metadata = {
  title: `${userData.name} - Full Stack Developer`,
  description: userData.bio,
  openGraph: {
    title: `${userData.name} - Full Stack Developer`,
    description: userData.bio,
    images: [userData.image],
  },
  twitter: {
    card: "summary_large_image",
    title: `${userData.name} - Full Stack Developer`,
    description: userData.bio,
    images: [userData.image],
  },
}

export default function CreatorPage() {
  const techStack = {
    languages: [
      { name: "Python", logo: "python" },
      { name: "JavaScript", logo: "javascript" },
      { name: "SQL", logo: "postgresql" },
      { name: "TypeScript", logo: "typescript" },
      { name: "HTML", logo: "html5" },
      { name: "CSS", logo: "css3" },
      { name: "Bash", logo: "gnubash" },
    ],
    technologies: [
      { name: "FastAPI", logo: "fastapi" },
      { name: "Express", logo: "express" },
      { name: "Flask", logo: "flask" },
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "React Native", logo: "react" },
      { name: "GraphQL", logo: "graphql" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Node.js", logo: "nodedotjs" },
      { name: "Bootstrap", logo: "bootstrap" },
      { name: "Notion", logo: "notion" },
      { name: "RabbitMQ", logo: "rabbitmq" },
    ],
    databases: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "SQLite", logo: "sqlite" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Redis", logo: "redis" },
      { name: "Elasticsearch", logo: "elasticsearch" },
      { name: "Firebase", logo: "firebase" },
    ],
    cloudDevOps: [
      { name: "AWS", logo: "amazonwebservices" },
      { name: "Docker", logo: "docker" },
      { name: "GitHub Actions", logo: "githubactions" },
      { name: "Vercel", logo: "vercel" },
      { name: "Netlify", logo: "netlify" },
      { name: "Heroku", logo: "heroku" },
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
    ],
  }
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {userData.name} <span className="block mt-2 text-2xl text-muted-foreground">@ysskrishna</span>
          </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Profile Card */}
          <Card className="h-fit">
            <CardHeader className="text-center">
              <div className="mx-auto relative w-40 h-40 mb-4 overflow-hidden rounded-full ring-4 ring-primary/10">
                <img
                  src={userData.image}
                  alt={userData.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-2xl font-bold">{userData.name}</CardTitle>
              <CardDescription className="text-md mb-1">
                <span className="text-xl text-muted-foreground">@ysskrishna</span>
              </CardDescription>
              <CardDescription className="text-md">
                Full Stack Developer <span className="mx-1">|</span> Founding Engineer <span className="mx-1">|</span> IITM Graduate
              </CardDescription>
              <div className="mt-2 flex items-center justify-center space-x-1">
                <span>From</span>
                <img
                  src="https://flagicons.lipis.dev/flags/4x3/in.svg"
                  width="15"
                  alt="India"
                  className="mx-1"
                />
                <span>Bengaluru, India</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-center space-x-4">
                  <Link href={userData.github} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="GitHub">
                      <GitHubLogoIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={userData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="LinkedIn">
                      <LinkedInLogoIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={`mailto:${userData.email}`}>
                    <Button size="icon" variant="outline" aria-label="Email">
                      <EnvelopeClosedIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={userData.website} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="Website">
                      <ExternalLinkIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={userData.youtube} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="YouTube">
                      <CameraIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-sm mb-2 text-muted-foreground">CONTACT</h3>
                  <div className="grid gap-2">
                    <Link href={`mailto:${userData.email}`} className="text-sm hover:underline flex items-center gap-2">
                      <EnvelopeClosedIcon className="h-4 w-4" />
                      {userData.email}
                    </Link>
                    <Link href={userData.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                      <ExternalLinkIcon className="h-4 w-4" />
                      Personal Website
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Area */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  I'm a dynamic Full Stack Developer, Founding Engineer, and an IITM graduate from Bengaluru, India, 
                  who loves building cutting-edge web and mobile applications. With extensive experience in backend development, 
                  frontend technologies, and cloud infrastructure, I specialize in creating scalable solutions for complex problems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🔧 Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.languages.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`} 
                          alt={tech.name}
                          className="h-3.5 w-3.5 dark:invert" 
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.technologies.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`} 
                          alt={tech.name} 
                          className="h-3.5 w-3.5 dark:invert" 
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.databases.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`} 
                          alt={tech.name} 
                          className="h-3.5 w-3.5 dark:invert" 
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.cloudDevOps.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`} 
                          alt={tech.name} 
                          className="h-3.5 w-3.5 dark:invert" 
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Find Me On</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Link href={userData.linkedin} target="_blank" rel="noopener noreferrer" 
                      className="flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <LinkedInLogoIcon className="h-5 w-5 mr-3" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                  </div>
                  <ExternalLinkIcon className="h-4 w-4 ml-auto" />
                </Link>
                
                <Link href={userData.producthunt} target="_blank" rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="h-5 w-5 mr-3 flex items-center justify-center">
                    <span className="text-sm font-bold">P</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Product Hunt</h3>
                    <p className="text-sm text-muted-foreground">Check out my product launches</p>
                  </div>
                  <ExternalLinkIcon className="h-4 w-4 ml-auto" />
                </Link>
                
                <Link href={userData.youtube} target="_blank" rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CameraIcon className="h-5 w-5 mr-3" />
                  <div>
                    <h3 className="font-medium">YouTube</h3>
                    <p className="text-sm text-muted-foreground">Watch my technical content</p>
                  </div>
                  <ExternalLinkIcon className="h-4 w-4 ml-auto" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
} 