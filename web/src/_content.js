import { SourceType } from "./components/dynamic-background/dynamic-background"

const placeholderBackground = {
    src: [
        ['#41295a', '#2F0743'],
        ['#1a2a6c', '#b21f1f'],
        ['#fdbb2d', '#3A1C71'],
        ['#D76D77', '#fdbb2d']
    ],
    sourceType: SourceType.gradient
}

// In-app CMS
const content = {
    logoSrc: '',
    error: {
        slides: [
            {
                template: 'error',
                background: {src: 'error-page.mp4', sourceType: SourceType.video},
                headline: '404',
                subHeadlines: ['This page exists only theoretically.']
            }
        ]
    },
    root: {
        nav: [
            {
                name: 'Students',
                destination: '/students'
            },
            {
                name: 'Employees',
                destination: '/employees'
            },
            {
                name: 'Cooperation',
                destination: '/business'
            },
            {
                name: 'News',
                destination: '/blog'
            }
        ],
    },
    faculty: {
        nav: {
            students: 'Students',
            candidates: 'Candidates',

        }
    },
    home: {
        slides: [
            {
                background: { src: 'home-main.mp4', sourceType: SourceType.video },
                template: 'title',
                headline: 'University beyond tomorrow',
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'World is constantly changing and so should teaching',
                subHeadlines: [
                    'At Saint Katherine\'s we reduced beraucracy to minimum,',
                    'so we can get closer with things that really matter'
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'From students for students',
                subHeadlines: [
                    'Life changing place like college should be restructured to meet young people expectations.',
                    'We know it the best as we came through same issues that we want to eliminate',
                    'Elastic hours? Project you want to deeply study? No money to move into the city?',
                    'We think we got you covered, look at our student page!'
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'We value knowledge, in many ways.',
                subHeadlines: [
                    'University is like any other organization and we are still looking for the best in their area.',
                    `Look at our jobs page to see our career opportunities and what we can offer.`,
                    `(yes, we also have underpaid internships)`,
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'We love what we do and we do it well',
                subHeadlines: [
                    'That\'s why we aren\'t scared of bussiness challenges (we are private university after all).',
                    'We can offer our expertise in wide range of areas in our narrow but deeply understood fields.',
                    `See business site ->`
                ],
            },
        ],
        options: {
            theme: ''
        }
    },
    students: {
        slides: [
            {
                background: { src: "students-campus.mp4", sourceType: SourceType.video },
                template: 'title',
                headline: 'Your future is also ours,',
                subHeadlines: ['let\'s take care of it together'],
            },
            {
                background: {
                    src: [
                        ['#6ec3f4', '#3a3aff'],
                        ['#ff61ab', '#E63946']
                    ],
                    sourceType: SourceType.gradient
                },
                template: 'action',
                headline: 'Taking care of your skills. At any level.',
                subHeadlines: [
                    'We offer possibiity of graduation from bachelor up to PhD.',
                    'Just for 799PLN/semester.'
                ],
                options: {
                    actionButtons: [
                        {
                            name: 'bachelor',
                            url: '/candidates/search#bachelor'
                        },
                        {
                            name: 'master',
                            url: '/candidates/search#master'
                        },
                        {
                            name: 'phd',
                            url: '/candidates/search#phd'
                        }
                    ]
                }
            },
            {
                background: { src: 'business3.jpg', sourceType: SourceType.image },
                template: 'default',
                headline: 'You can also jump right to faculties pages.',
                options: {
                    faculties: [
                        {
                            default: 'Computer Science',
                            url: '/faculty/ComputerScience',
                            logoSource: ''
                        },
                        {
                            default: 'Architecture',
                            url: '/faculty/Architecture',
                            logoSource: ''
                        },
                        {
                            default: 'Design',
                            url: '/faculty/Design',
                            logoSource: ''
                        },
                        {
                            default: 'Mechanics',
                            url: '/faculty/Mechanics',
                            logoSource: ''
                        }
                    ]
                }
            },
            {
                background: {
                    src: [
                        ['#159957', '#34e89e'],
                        ['#0f3443', '#155799']
                    ], sourceType: SourceType.gradient
                },
                template: 'default',
                headline: 'Knowledge by experience',
                subHeadlines: ['check what interesting projects you can work with'],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Less is more',
                subHeadlines: ['We have virtual first approach what means not '],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Life is already expensive, education shouldn\'t',
                subHeadlines: [
                    'University of Saint Katherine was designed to divide it\'s income source.',
                    'Even if education here isn\'t free we still keep in mind how many other expenses you can face during your early adult life.',
                    'That\'s why we cover mostly costs from our business partnerships cutting tuition by more than a half.',
                    'Also online friendly approach let us limit our expenses to necessary minimum.'
                ],
            },
            {
                background: { src: 'business1.mp4', sourceType: SourceType.video },
                template: 'default',
                headline: 'We believe education is for everyone.',
                subHeadlines: [
                    'Even though you struggle we offer many scholarship options as well.',
                    'We aren\'t closed to competences of our students and we also give them possibility to kickstart their career with paid internships.'
                ],
            },
        ],
        options: {
        }
    },
    employees: {
        slides: [
            {
                background: { src: 'employees-main.mp4', sourceType: SourceType.video },
                template: 'title',
                headline: 'Let your career lift off',
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'If we match, we can offer you a fullfiling relationship',
                subHeadlines: ['Maybe you do not want to marry company and we respect that however we still offer beyond competetive salary, self development, fun projects and much more!'],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Benefits',
                options: {
                    benefits: [
                        {
                            name: 'benefit 1',
                            description: 'benefit 1 desc',
                            icon: ''
                        },
                        {
                            name: 'benefit 1',
                            description: 'benefit 1 desc',
                            icon: ''
                        },
                        {
                            name: 'benefit 1',
                            description: 'benefit 1 desc',
                            icon: ''
                        },
                        {
                            name: 'benefit 1',
                            description: 'benefit 1 desc',
                            icon: ''
                        }
                    ]
                }
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Our values',
            },
        ],
        options: {
        }
    },
    business: {
        slides: [
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Empty :(('
            }
        ],
        options: {

        }
    },
    news: {
        slides: [
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Empty :(('
            }
        ],
        options: {

        }
    }
}


export default content