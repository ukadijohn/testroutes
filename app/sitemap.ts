import { MetadataRoute } from 'next'
import { ROUTES } from '@/lib/routes'
import { LESSONS } from '@/lib/lessons'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portsmouthdrivingschool.co.uk'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/lessons`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/test-routes`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ]

  const lessonPages = LESSONS.map(l => ({
    url: `${baseUrl}/lessons/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const routePages = ROUTES.map(r => ({
    url: `${baseUrl}/test-routes/${r.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...lessonPages, ...routePages]
}
