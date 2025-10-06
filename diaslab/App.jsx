import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Dna, 
  Brain, 
  Database, 
  Microscope, 
  BookOpen, 
  Users, 
  Mail, 
  Github,
  ExternalLink,
  ChevronRight,
  Beaker,
  Target,
  Lightbulb
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const researchAreas = [
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Protein Structure & Function",
      description: "Understanding the link between protein sequence/structure, stability, and function, and the features responsible for protein-ligand binding affinity."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Genetic Disease Modeling",
      description: "Modeling and explaining complex genetic diseases and identifying new potential biomarkers and driving factors."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Biological Data Enhancement",
      description: "Enhancing the quality of biological data through imputation, simulation, feature engineering, and signal vs. noise filtering."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Medicine & Agriculture",
      description: "Helping synthetic biologists on promoter design and mutation screening approaches, advancing precision medicine and precision agriculture."
    }
  ]

  const resources = [
    {
      category: "For Newcomers",
      items: [
        { title: "Lab Conduct Compact", description: "Guidelines for working in the lab, including safety protocols and best practices" },
        { title: "Version Control with GitHub", description: "A guide to using Git and GitHub for collaborative development" },
        { title: "Accessing HiPerGator", description: "Instructions for utilizing the University of Florida's supercomputer" }
      ]
    },
    {
      category: "Python Proficiency",
      items: [
        { title: "Python Guides", description: "Tutorials covering basics to advanced Python concepts" },
        { title: "Parallel Hyperparameter Optimization with Optuna", description: "Efficient hyperparameter tuning in machine learning models" },
        { title: "Poetry for Python Package Publishing", description: "Managing dependencies and publishing Python packages" }
      ]
    }
  ]

  const projects = [
    {
      title: "Explainable AI (XAI)",
      description: "Research focused on developing AI models that can be understood and interpreted by humans.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Protein Structure Analysis",
      description: "Studies on the relationships between protein characteristics and their biological roles, including ligand binding and genetic mutations.",
      icon: <Microscope className="w-6 h-6" />
    }
  ]

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
          <Beaker className="w-4 h-4" />
          AI Research Laboratory
        </div>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Dias Lab
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Applying cutting-edge Artificial Intelligence techniques to advance our understanding of 
          biological systems, from protein structures to genetic diseases, driving innovation in 
          precision medicine and agriculture.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => setActiveSection('research')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Explore Research
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setActiveSection('resources')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Resources
          </Button>
        </div>
      </section>

      {/* Research Areas Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Research Focus Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our laboratory focuses on four key areas where AI can make significant impact in biological research
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">4</div>
            <div className="text-sm text-muted-foreground">Research Areas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">AI</div>
            <div className="text-sm text-muted-foreground">Driven Approach</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>
      </section>
    </div>
  )

  const renderResearch = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Research Areas</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our laboratory applies cutting-edge AI techniques across multiple domains of biological research
        </p>
      </div>

      <div className="grid gap-8">
        {researchAreas.map((area, index) => (
          <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-600 dark:text-blue-400">
                {area.icon}
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold">{area.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{area.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Ongoing Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                  {project.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderResources = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Resources & Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Essential resources for lab members, collaborators, and the research community
        </p>
      </div>

      <div className="space-y-12">
        {resources.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1">
                {section.category}
              </Badge>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Useful References</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="space-y-3">
              <h3 className="font-semibold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Structural Biology Textbooks
              </h3>
              <p className="text-sm text-muted-foreground">
                Recommended textbooks and resources for understanding protein structures and their implications
              </p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Microscope className="w-5 h-5" />
                Molecular Dynamics Textbooks
              </h3>
              <p className="text-sm text-muted-foreground">
                Recommended textbooks and resources for learning about molecular dynamics simulations
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderContact = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with our research team
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">Dias Lab</h2>
              <p className="text-muted-foreground">
                AI Research Laboratory
              </p>
            </div>
            
            <Separator />
            
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground">
                For research inquiries, collaboration opportunities, or general questions, please reach out to us.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  const navigation = [
    { id: 'home', label: 'Home', icon: <Beaker className="w-4 h-4" /> },
    { id: 'research', label: 'Research', icon: <Microscope className="w-4 h-4" /> },
    { id: 'resources', label: 'Resources', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome()
      case 'research': return renderResearch()
      case 'resources': return renderResources()
      case 'contact': return renderContact()
      default: return renderHome()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Dna className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Dias Lab</span>
            </div>
            <div className="flex items-center gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <Dna className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Dias Lab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI Research Laboratory - Advancing Biological Understanding
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
