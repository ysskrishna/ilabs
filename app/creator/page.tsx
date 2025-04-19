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
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const userData = {
  name: "Y. Siva Sai Krishna",
  image: "https://github.com/ysskrishna.png",
  bio: "Full stack developer specialized in creating cutting-edge web scalable applications. Proficient in SQL, Node.js, Python (Flask, FastAPI), React, Redux and Distributed Systems",
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
  const skills = [
    "SQL", "Node.js", "Python", "Flask", "FastAPI", "React", 
    "Redux", "Distributed Systems", "JavaScript", "TypeScript"
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{userData.name}</h1>
            <p className="mt-4 text-xl text-muted-foreground">Full Stack Developer</p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href={userData.github} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href={userData.linkedin} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline">
                  <LinkedInLogoIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href={userData.website} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Website
                </Button>
              </Link>
            </div>
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
              <CardDescription className="text-md">
                Full Stack Developer
              </CardDescription>
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
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-sm mb-2 text-muted-foreground">SKILLS</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
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
                <p className="leading-7">{userData.bio}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Highlights</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Scalable Web Applications</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed and developed cutting-edge web applications with focus on scalability and performance.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Backend System Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    Built robust backend systems using Node.js, Python (Flask, FastAPI) with SQL databases.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Created responsive and interactive user interfaces using React and Redux.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={userData.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    View GitHub Projects
                  </Button>
                </Link>
              </CardFooter>
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