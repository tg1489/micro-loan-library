export type Library = {
  id: string
  name: string
  city: string
  neighborhood: string
  membership: string
  tools: string[]
  description: string
  website: string
}

export const libraries: Library[] = [
  {
    id: 'portland-tool-library',
    name: 'Portland Tool Library',
    city: 'Portland, OR',
    neighborhood: 'Central Eastside',
    membership: '$60/yr or $10 donation',
    tools: ['Drills', 'Saws', 'Ladders', 'Gardening'],
    description: 'Community-run tool library with 3,000+ tools. Members borrow for 2 weeks.',
    website: 'https://example.com/portland'
  },
  {
    id: 'boulder-share-space',
    name: 'Boulder Share Space',
    city: 'Boulder, CO',
    neighborhood: 'Downtown',
    membership: '$45/yr',
    tools: ['Power Tools', 'Camping Gear', 'Bike Repair'],
    description: 'Share-space and tool co-op for residents and makers.',
    website: 'https://example.com/boulder'
  },
  {
    id: 'seattle-tool-coop',
    name: 'Seattle Tool Co-op',
    city: 'Seattle, WA',
    neighborhood: 'Ballard',
    membership: 'Sliding scale $30-80/yr',
    tools: ['Woodworking', 'Saws', 'Paint Sprayers'],
    description: 'Co-op owned, volunteer-run. Workshops included with membership.',
    website: 'https://example.com/seattle'
  },
  {
    id: 'austin-maker-library',
    name: 'Austin Maker Library',
    city: 'Austin, TX',
    neighborhood: 'East Austin',
    membership: '$50/yr',
    tools: ['3D Printers', 'Drills', 'Garden Tools'],
    description: 'Neighborhood tool library and maker space.',
    website: 'https://example.com/austin'
  },
  {
    id: 'chicago-tool-library',
    name: 'Chicago Tool Library',
    city: 'Chicago, IL',
    neighborhood: 'Pilsen',
    membership: '$55/yr or donation',
    tools: ['Hand Tools', 'Power Tools', 'Ladders'],
    description: 'Borrow tools for home repair and community projects.',
    website: 'https://example.com/chicago'
  }
]
