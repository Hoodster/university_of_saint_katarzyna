import articles from "./_articles"
import { SourceType } from "../components/dynamic-background/dynamic-background"
import { universityProjects } from "./_projects"

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
    error: {
        slides: [
            {
                template: 'error',
                background: { src: 'error-page.mp4', sourceType: SourceType.video },
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
                    'At Saint Katherine\'s we reduced bureaucracy to minimum,',
                    'so we can get closer with things that really matter'
                ],
            },
            {
                background: { src: 'school.jpg', sourceType: SourceType.image },
                template: 'default',
                headline: 'From students for students',
                subHeadlines: [
                    'World has changed and so have needs.',
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
                    'That\'s why we aren\'t scared of business challenges (we are a private university after all).',
                    'We can offer our expertise in a wide range of areas in our narrow but deeply understood fields.',
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Join our vibrant community',
                subHeadlines: [
                    'We have a thriving student life with clubs, sports, and events.',
                    'From coding hackathons to cultural festivals, there is always something happening at Saint Katherine\'s.'
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'State-of-the-art facilities',
                subHeadlines: [
                    'Our campus boasts modern classrooms, advanced labs, and comfortable dormitories.',
                    'We are committed to providing a conducive learning environment for our students.'
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
                headline: 'Your future is also ours.',
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
                background: {
                    src: [
                        ['#159957', '#34e89e'],
                        ['#0f3443', '#155799']
                    ], sourceType: SourceType.gradient
                },
                template: 'project',
                headline: 'Knowledge by experience',
                subHeadlines: [
                    'Whole university course is project related. It means that you learn by working on complex real life problem solutions.',
                    'Each course is described so you can find out what levels and areas you can learn with both topics corresponding to your interest and solid background on working with business code.'
                ],
                options: {
                    projects: universityProjects
                }
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Life is already expensive, education shouldn\'t be',
                subHeadlines: [
                    'University of Saint Katherine was designed to diversify its income sources.',
                    'Even if education here isn\'t free, we still keep in mind how many other expenses you can face during your early adult life.',
                    'That\'s why we cover most costs from our business partnerships, cutting tuition by more than half.',
                    'Also, an online-friendly approach lets us limit our expenses to the necessary minimum.'
                ],
            },
            {
                background: { src: 'business1.mp4', sourceType: SourceType.video },
                template: 'default',
                headline: 'We believe education is for everyone.',
                subHeadlines: [
                    'Even if you struggle, we offer many scholarship options as well.',
                    'We aren\'t closed to the competences of our students and we also give them the possibility to kickstart their career with paid internships.'
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
                headline: 'Benefits',
                subHeadline: 'Health Insurance, Flexible Hours, Professional Development, Paid Time Off',
                options: {
                    benefits: [
                        {
                            name: 'Health Insurance',
                            description: 'Comprehensive health insurance for you and your family.',
                            icon: 'health_icon'
                        },
                        {
                            name: 'Flexible Hours',
                            description: 'Adjust your work schedule to fit your personal needs.',
                            icon: 'flexible_icon'
                        },
                        {
                            name: 'Professional Development',
                            description: 'Opportunities for continuing education and career growth.',
                            icon: 'development_icon'
                        },
                        {
                            name: 'Paid Time Off',
                            description: 'Generous paid vacation and sick leave policies.',
                            icon: 'pto_icon'
                        }
                    ]
                }
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Jolly cooperation',
                subHeadlines: ['We offer beyond competitive salary, self development, fun projects, and much more!'],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Join our innovative team',
                subHeadlines: [
                    'At Saint Katherine\'s, we value creativity and innovation.',
                    'Work with a dynamic team on cutting-edge projects and make a real impact.'
                ],
            },
        ],
    },
    business: {
        slides: [
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Partner with Us',
                subHeadlines: [
                    'Explore opportunities for collaboration and partnership.',
                    'Whether you are a startup or an established company, we can work together to create mutually beneficial outcomes.',
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Research and Development',
                subHeadlines: [
                    'Leverage our academic expertise and state-of-the-art facilities for your R&D needs.',
                    'We offer consultancy services and can help you bring your innovations to market.',
                ],
            },
            {
                background: placeholderBackground,
                template: 'default',
                headline: 'Training and Workshops',
                subHeadlines: [
                    'Invest in your team with our customized training programs and workshops.',
                    'Designed to meet the specific needs of your business, our programs will help enhance your workforce\'s skills and knowledge.'
                ],
            },
        ],
        options: {

        }
    },
    news: {
        slides: [
            {
                background: {
                    src: [
                        ['#ffecd2', '#fcb69f'],
                        ['#fdfcfb', '#e2d1c3']],
                    sourceType: SourceType.gradient
                },
                template: 'news',
                headline: 'University News',
                options: {
                    articles
                }
            }
        ]
    }
}

export default content
