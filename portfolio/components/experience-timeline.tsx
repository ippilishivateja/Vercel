"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ExperienceItem {
  company: string
  role: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: "George Mason University",
    role: "Master of Science - Data Analytics Engineering",
    duration: "Aug 2023 - May 2025",
    location: "Fairfax, VA",
    current: true,
    description: [
      "Pursuing advanced coursework in Database Management and Mining, Big Data, and Applied Statistics",
      "Developing expertise in machine learning algorithms and statistical modeling techniques",
      "Working on cutting-edge projects in NLP, computer vision, and big data analytics",
      "Maintaining strong academic performance while building practical data science skills",
    ],
    technologies: ["Python", "R", "Apache Spark", "Databricks", "TensorFlow", "PyTorch"],
  },
  {
    company: "Wipro Technologies",
    role: "Data Analyst | SAP | Python & Java Automation",
    duration: "Apr 2021 - Jul 2023",
    location: "Bangalore, India",
    description: [
      "Built automated data pipelines in Python and Java to process large-scale datasets, cutting reporting time from hours to minutes and improving productivity by 40%",
      "Leveraged SAP reporting tools to generate actionable insights, enabling management to make faster, evidence-based decisions that increased project delivery efficiency by 12%",
      "Designed interactive dashboards and KPI trackers, improving visibility into project performance and helping leadership prioritize high-impact initiatives",
      "Collaborated with cross-functional teams to align analytical outputs with business goals, directly contributing to a 10% increase in client satisfaction scores",
    ],
    technologies: ["Python", "Java", "SAP", "SQL", "Tableau", "Power BI"],
  },
  {
    company: "CIITS",
    role: "Cyber Security Intern",
    duration: "May 2018 - Jul 2018",
    location: "Visakhapatnam, India",
    description: [
      "Received specialized training in Privacy Protection-based Access Control Schemes for cloud-based services",
      "Focused on implementing secure access management protocols to enhance data privacy and confidentiality",
      "Developed understanding of authentication mechanisms in cloud computing environments",
      "Gained hands-on experience with cybersecurity frameworks and best practices",
    ],
    technologies: ["Cloud Security", "Access Control", "Privacy Protection", "Authentication"],
  },
]

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-black border-2 border-blue-500/30 hover:border-blue-400/50 h-full">
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-xl group-hover:text-blue-300 transition-colors text-white">
              {experience.role}
            </CardTitle>
            <CardDescription className="text-lg font-semibold text-blue-400">
              {experience.company}
              {experience.current && (
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/50">
                  Current
                </span>
              )}
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-blue-200">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {experience.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2 mb-4 min-h-[120px]">
            {experience.description.map((item, i) => (
              <li key={i} className="text-sm text-blue-100 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 min-h-[60px] items-start">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors border border-blue-500/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ExperienceTimeline() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className="relative">
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
