export interface Case {
  title: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locations: string
  industry: string
  employees: string
  challenge: string
  headerImg?: { data?: { attributes?: { url?: string } } }
  logo?: { data?: { attributes?: { url?: string } } }
  bodyImg: { data?: { attributes?: { url?: string } } }
  quoteAuthorImg?: { data?: { attributes?: { url?: string } } }
  solution: string
  ingeniaWay: IngeniaWay
  drivers: string
  products: string
  quoteText: string
  quoteAuthor: string
  quoteAuthorRole: string
  locale: string
  name: string
  ingenialWayText: string
}

export interface IngeniaWay {
  tasks: Task[]
}

export interface Task {
  id: string
  description: string
  subtasks?: string[]
}

export interface Case {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  title: string
  body: string
  logo?: { data?: { attributes?: { url?: string } } }
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
}
