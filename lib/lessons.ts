export interface Lesson {
  slug: string
  title: string
  description: string
  videoId?: string
  duration: string
  icon: string
  category: string
  keyPoints: string[]
  commonMistakes: string[]
  nextLesson?: string
}

export const LESSONS: Lesson[] = [
  {
    slug: 'starting-moving-off',
    title: 'Starting & Moving Off',
    description: 'Master the cockpit drill, prepare your controls, and move off safely in traffic.',
    videoId: 'dQw4w9WgXcQ',
    duration: '12 min',
    icon: '🚗',
    category: 'Basics',
    keyPoints: [
      'Always complete the DSSSM routine before moving off',
      'Find the biting point before releasing the handbrake',
      'Check mirrors and blind spot before pulling out',
      'Signal in good time when moving off from the kerb',
    ],
    commonMistakes: [
      'Stalling due to not finding the biting point correctly',
      'Forgetting to check the right blind spot',
      'Moving off too slowly in fast-moving traffic',
      'Not cancelling the signal after moving off',
    ],
    nextLesson: 'steering-control',
  },
  {
    slug: 'steering-control',
    title: 'Steering Control',
    description: 'Learn the push-pull steering technique and how to handle bends and curves safely.',
    videoId: 'dQw4w9WgXcQ',
    duration: '10 min',
    icon: '🎯',
    category: 'Basics',
    keyPoints: [
      'Keep both hands on the wheel in the 10-and-2 or 9-and-3 position',
      'Use push-pull technique — never cross your arms',
      'Look ahead in the direction you want to travel',
      'Steer smoothly — sudden movements unsettle the car',
    ],
    commonMistakes: [
      'Crossing hands when turning',
      'Looking at the road immediately in front rather than ahead',
      'Gripping the wheel too tightly',
      'Over-steering on gentle bends',
    ],
    nextLesson: 'clutch-control',
  },
  {
    slug: 'clutch-control',
    title: 'Clutch Control & Gear Changes',
    description: 'Understand the biting point, smooth gear changes, and when to change up or down.',
    videoId: 'dQw4w9WgXcQ',
    duration: '15 min',
    icon: '⚙️',
    category: 'Basics',
    keyPoints: [
      'Change gear at the right engine speed — listen to the engine',
      'Always depress the clutch fully before changing gear',
      'Use block gear changes where appropriate (e.g., 4th to 2nd)',
      'Never ride the clutch — remove your foot after each change',
    ],
    commonMistakes: [
      'Coasting — holding the clutch down for too long',
      'Crunching gears by not pressing the clutch fully',
      'Changing down too late when approaching hazards',
      'Forgetting to select neutral at traffic lights',
    ],
    nextLesson: 'mirrors-signals-manoeuvres',
  },
  {
    slug: 'mirrors-signals-manoeuvres',
    title: 'Mirrors, Signals & Manoeuvres',
    description: 'The MSM routine is the foundation of safe driving. Master it and you\'ll pass.',
    videoId: 'dQw4w9WgXcQ',
    duration: '14 min',
    icon: '🪞',
    category: 'Safety',
    keyPoints: [
      'Check mirrors before every signal, speed change, or direction change',
      'Signal in good time — too late is as bad as not signalling',
      'Always check the blind spot before moving to the left or right',
      'Position the car correctly before turning',
    ],
    commonMistakes: [
      'Checking mirrors after already beginning to manoeuvre',
      'Signalling too late for following drivers to react',
      'Forgetting the left blind spot when moving to the left',
      'Not cancelling signals after completing a turn',
    ],
    nextLesson: 'roundabouts-junctions',
  },
  {
    slug: 'roundabouts-junctions',
    title: 'Roundabouts & Junctions',
    description: 'Approach, lane selection, and exit on roundabouts and all junction types.',
    videoId: 'dQw4w9WgXcQ',
    duration: '18 min',
    icon: '🔄',
    category: 'Road Skills',
    keyPoints: [
      'Give way to traffic already on the roundabout — from the right',
      'Select the correct lane before you reach the roundabout',
      'Signal left when passing the exit before the one you want',
      'At T-junctions, look right, left, then right again before emerging',
    ],
    commonMistakes: [
      'Taking the wrong lane on approach',
      'Pulling out at a junction when it is not safe',
      'Forgetting to signal when leaving a roundabout',
      'Stopping unnecessarily when the roundabout is clear',
    ],
    nextLesson: 'motorway-awareness',
  },
  {
    slug: 'motorway-awareness',
    title: 'Motorway Awareness',
    description: 'Rules, lane discipline, joining/leaving, and staying safe at higher speeds.',
    videoId: 'dQw4w9WgXcQ',
    duration: '16 min',
    icon: '🛣️',
    category: 'Advanced',
    keyPoints: [
      'Motorways have a national speed limit of 70mph unless signed otherwise',
      'Keep left unless overtaking — never sit in the middle or right lane',
      'Increase following distance significantly — two seconds minimum',
      'Use the MSM routine when joining from a slip road',
    ],
    commonMistakes: [
      'Middle-lane hogging',
      'Not matching motorway speed when joining on a slip road',
      'Tailgating at high speed',
      'Indicating and immediately moving without checking mirrors',
    ],
    nextLesson: 'hazard-perception',
  },
  {
    slug: 'hazard-perception',
    title: 'Hazard Perception',
    description: 'How to spot developing hazards early and respond before they become dangerous.',
    videoId: 'dQw4w9WgXcQ',
    duration: '20 min',
    icon: '⚠️',
    category: 'Theory',
    keyPoints: [
      'A developing hazard is one that requires you to take action',
      'Click as soon as you see a hazard developing — not when it\'s obvious',
      'Scan ahead, not just immediately in front of you',
      'Use the commentary driving technique to practise hazard spotting',
    ],
    commonMistakes: [
      'Clicking too late — only when the hazard is fully developed',
      'Clicking randomly trying to score points — this results in zero',
      'Not watching for pedestrians about to step into the road',
      'Ignoring parked cars as potential hazards',
    ],
    nextLesson: 'theory-test-prep',
  },
  {
    slug: 'theory-test-prep',
    title: 'Theory Test Preparation',
    description: 'Complete guide to the multiple-choice section and hazard perception test.',
    videoId: 'dQw4w9WgXcQ',
    duration: '22 min',
    icon: '📚',
    category: 'Theory',
    keyPoints: [
      'The theory test has 50 multiple-choice questions — you need 43 to pass',
      'You must also pass the hazard perception section with 44 out of 75',
      'Study the Highway Code thoroughly — most questions come from it',
      'Use the official DVSA learning materials for the most accurate prep',
    ],
    commonMistakes: [
      'Only using third-party apps rather than official DVSA materials',
      'Memorising answers rather than understanding the principles',
      'Underestimating the hazard perception section',
      'Not practising under timed conditions',
    ],
  },
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find(l => l.slug === slug)
}
