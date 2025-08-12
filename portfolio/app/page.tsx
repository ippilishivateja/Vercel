import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Download, BarChart3, Database, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { AnimatedBackground } from "@/components/animated-background"
import { GlassSection } from "@/components/glass-section"
import { ShinyCard } from "@/components/shiny-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glowing avatar */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold animate-in zoom-in duration-700 delay-200 shadow-2xl shadow-blue-500/25">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-75"></div>
              <span className="relative z-10">ST</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Data Analyst
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            Hi, I'm Shiva Teja. I transform data into actionable insights and turn ideas into real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25"
              asChild
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shiva_Teja_Ippili_Resume.pdf"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform border-blue-400 text-blue-300 hover:bg-blue-900/50 bg-transparent"
              asChild
            >
              <Link href="mailto:shivatejaippili@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="container mx-auto px-4 py-20">
          <GlassSection className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <AnimatedSection delay={200}>
                  <p className="text-lg text-blue-100">
                    I'm a results-driven Data Analytics Engineer with a passion for solving complex problems at the
                    intersection of data, technology, and user experience. With a strong foundation in machine learning,
                    big data technologies, and full-stack development, I specialize in building scalable, data-driven
                    solutions that empower intelligent decision-making.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <p className="text-lg text-blue-100">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge through blog posts and mentoring.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={600}>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-transform border-blue-400 text-blue-300 hover:bg-blue-900/50 bg-transparent"
                      asChild
                    >
                      <Link href="https://github.com/ippilishivateja" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-transform border-blue-400 text-blue-300 hover:bg-blue-900/50 bg-transparent"
                      asChild
                    >
                      <Link
                        href="https://www.linkedin.com/in/shiva-teja-ippili-710b85338"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              <div className="space-y-6">
                <AnimatedSection delay={300}>
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
                    <BarChart3 className="h-8 w-8 text-blue-400 group-hover:rotate-12 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-white">Data Visualization</h3>
                      <p className="text-sm text-blue-200">Creating compelling charts and dashboards</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={500}>
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
                    <Database className="h-8 w-8 text-purple-400 group-hover:rotate-12 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-white">Statistical Analysis</h3>
                      <p className="text-sm text-blue-200">Advanced statistical modeling and insights</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={700}>
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
                    <TrendingUp className="h-8 w-8 text-green-400 group-hover:rotate-12 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-white">Predictive Analytics</h3>
                      <p className="text-sm text-blue-200">Machine learning and forecasting models</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </GlassSection>
        </section>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection>
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <GlassSection className="max-w-4xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">Professional Experience</h2>
              <ExperienceTimeline />
            </GlassSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection>
        <section id="skills" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={200}>
                <ShinyCard className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-white">Programming & Data Analysis</CardTitle>
                    <CardDescription className="text-blue-200">Core programming and analytical tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">
                        Python
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">R</Badge>
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">SQL</Badge>
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">C++</Badge>
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">
                        JavaScript
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">
                        Pandas
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-500">
                        NumPy
                      </Badge>
                    </div>
                  </CardContent>
                </ShinyCard>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <ShinyCard className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-white">Data Visualization & BI</CardTitle>
                    <CardDescription className="text-blue-200">Business intelligence and visualization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="hover:scale-110 transition-transform bg-purple-600 hover:bg-purple-500">
                        Tableau
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-purple-600 hover:bg-purple-500">
                        Power BI
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-purple-600 hover:bg-purple-500">
                        Matplotlib
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-purple-600 hover:bg-purple-500">
                        Seaborn
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-purple-600 hover:bg-purple-500">
                        Plotly
                      </Badge>
                    </div>
                  </CardContent>
                </ShinyCard>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <ShinyCard className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-white">Big Data & Cloud</CardTitle>
                    <CardDescription className="text-blue-200">Cloud platforms and big data tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-500">
                        Apache Spark
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-500">
                        Databricks
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-500">
                        AWS
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-500">
                        Google BigQuery
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-500">
                        MongoDB
                      </Badge>
                      <Badge className="hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-500">
                        PostgreSQL
                      </Badge>
                    </div>
                  </CardContent>
                </ShinyCard>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection>
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatedSection delay={200}>
                  <ShinyCard className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700 rounded-t-lg group-hover:scale-105 transition-transform relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-white">
                        Jigsaw Unintended Bias Detection
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:scale-110 transition-transform text-blue-300 hover:text-blue-100"
                            asChild
                          >
                            <Link href="https://github.com/ippilishivateja" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-blue-200">
                        Deep learning model for unintended bias detection in toxicity classification using NLP
                        techniques. Achieved 15% reduction in false positives with BERT embeddings.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          NLP
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          TensorFlow
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          PyTorch
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          BERT
                        </Badge>
                      </div>
                    </CardContent>
                  </ShinyCard>
                </AnimatedSection>

                <AnimatedSection delay={400}>
                  <ShinyCard className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="h-48 bg-gradient-to-br from-green-600 to-teal-700 rounded-t-lg group-hover:scale-105 transition-transform relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-white">
                        Building Bridges to Last
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:scale-110 transition-transform text-blue-300 hover:text-blue-100"
                            asChild
                          >
                            <Link href="https://github.com/ippilishivateja" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-blue-200">
                        Analyzed bridge material performance using PySpark on Databricks. Applied ML models to predict
                        degradation patterns, reducing maintenance costs by 30%.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          Databricks
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          PySpark
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          AWS
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          MongoDB
                        </Badge>
                      </div>
                    </CardContent>
                  </ShinyCard>
                </AnimatedSection>

                <AnimatedSection delay={600}>
                  <ShinyCard className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="h-48 bg-gradient-to-br from-orange-600 to-red-700 rounded-t-lg group-hover:scale-105 transition-transform relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-white">
                        n-SAC Computer Vision
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:scale-110 transition-transform text-blue-300 hover:text-blue-100"
                            asChild
                          >
                            <Link href="https://github.com/ippilishivateja" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-blue-200">
                        Hybrid pipeline combining classical and geometry-driven methods for shadow detection with 90%+
                        accuracy in complex environments.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          Computer Vision
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          Deep Learning
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          Python
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:scale-110 transition-transform bg-slate-700 text-blue-200"
                        >
                          OpenCV
                        </Badge>
                      </div>
                    </CardContent>
                  </ShinyCard>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="container mx-auto px-4 py-20">
          <GlassSection className="max-w-6xl mx-auto p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Quick Contact Buttons */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-white">Quick Contact</h3>
                <div className="space-y-4">
                  <AnimatedSection delay={200}>
                    <Button
                      size="lg"
                      className="w-full text-lg px-8 hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25"
                      asChild
                    >
                      <Link href="mailto:shivatejaippili@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        shivatejaippili@gmail.com
                      </Link>
                    </Button>
                  </AnimatedSection>
                  <AnimatedSection delay={400}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full text-lg px-8 hover:scale-105 transition-transform border-blue-400 text-blue-300 hover:bg-blue-900/50 bg-transparent"
                      asChild
                    >
                      <Link href="https://github.com/ippilishivateja" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub Profile
                      </Link>
                    </Button>
                  </AnimatedSection>
                  <AnimatedSection delay={600}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full text-lg px-8 hover:scale-105 transition-transform border-blue-400 text-blue-300 hover:bg-blue-900/50 bg-transparent"
                      asChild
                    >
                      <Link
                        href="https://www.linkedin.com/in/shiva-teja-ippili-710b85338"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </Link>
                    </Button>
                  </AnimatedSection>
                </div>
              </div>

              {/* Contact Form */}
              <AnimatedSection delay={300}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </GlassSection>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-blue-200">
          <p>&copy; 2024 Shiva Teja Ippili. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
