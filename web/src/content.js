
// In-app CMS
const content = {
    logoSrc: '',
    root: {
        nav:[
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
                bgSource: '',
                template: null,
                headline: 'Education beyond tomorrow.',
                subHeadlines: [],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'World is constantly changing and so should teaching',
                subHeadlines: [
                    'At Saint Katherine\'s we reduced beraucracy to minimum,',
                    ' so we can get closer with things that really matter'
            ],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'From students for students',
                subHeadlines: [
                    'Life changing place like college should be restructured to meet young people expectations.',
                    'We know it the best as we came through same issues that we want to eliminate',
                    'Elastic hours? Project you want to deeply study? No money to move into the city?',
                    'We think we got you covered, look at our student page!'
                ],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'We value knowledge, in many ways.',
                subHeadlines: [
                    'University is like any other organization and we are still looking for the best in their area.',
                    `Look at our jobs page to see our career opportunities and what we can offer.`,
                    `(yes, we also have underpaid internships)`,
                ],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'We love what we do and we do it well',
                subHeadlines: [
                    'That\'s why we aren\'t scared of bussiness challenges (we are private university after all).',
                    'We can offer our expertise in wide range of areas in our narrow but deeply understood fields.',
                    `See business site ->`
                ],
                options: {}
            },
        ],
        options: {
            theme: ''
        }
    },
    students: {
        slides: [
            {
                bgSource: '',
                template: null,
                headline: 'Your future is also ours,',
                subHeadlines: ['Let\'s take care of it together'],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'Do you start or maybe continue? We offer possibiity of graduation from bachelor up to PhD.',
                subHeadlines: ['Just for 799PLN/semester.'],
                options: {
                    eduLevels: [
                        'bachelor',
                        'master',
                        'PhD'
                    ]
                }
            },
            {
                bgSource: '',
                template: null,
                headline: 'You can also jump right to faculties pages',
                subHeadlines: ['(or read more about our vision of high education)'],
                options: {
                    faculties: [
                        {
                            title: 'Computer Science',
                            url: '/faculty/ComputerScience',
                            logoSource: ''
                        },
                        {
                            title: 'Architecture',
                            url: '/faculty/Architecture',
                            logoSource: ''
                        },
                        {
                            title: 'Design',
                            url: '/faculty/Design',
                            logoSource: ''
                        },
                        {
                            title: 'Mechanics',
                            url: '/faculty/Mechanics',
                            logoSource: ''
                        }
                    ]
                }
            },
            {
                bgSource: '',
                template: null,
                headline: 'Enforced by higher powers (university project) we sat down to hardly think together how to define university of tomorrow.'
                + 'In fact we did bunch of cool ideas.',
                subHeadlines: [],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'Less is more',
                subHeadlines: ['We have virtual first approach what means not '],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'Life is already expensive, education shouldn\'t',
                subHeadlines: [
                    'University of Saint Katherine was designed to divide it\'s income source.',
                    'Even if education here isn\'t free we still keep in mind how many other expenses you can face during your early adult life.',
                    'That\'s why we cover mostly costs from our business partnerships cutting tuition by more than a half.',
                    'Also online friendly approach let us limit our expenses to necessary minimum.'
                ],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'We believe education is for everyone.',
                subHeadlines: [
                    'Even though you struggle we offer many scholarship options as well.',
                    'We aren\'t closed to competences of our students and we also give them possibility to kickstart their career with paid internships.'
                ],
                options: {}
            },
        ],
        options: {
            theme: '',
            navOptions: {
                actionButton: { title: 'SaintKatID', to: '/students/login' }
            }
        }
    },
    employees: {
        slides: [
            {
                bgSource: '',
                template: null,
                headline: 'Let your career lift off',
                subHeadlines: [],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'If we match, we can offer you a fullfiling relationship',
                subHeadlines: ['Maybe you do not want to marry company and we respect that however we still offer beyond competetive salary, self development, fun projects and much more!'],
            },
            {
                bgSource: '',
                template: null,
                headline: 'Benefits',
                subHeadlines: [],
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
                bgSource: '',
                template: null,
                headline: 'Our values',
                subHeadlines: [],
                options: {}
            },
            {
                bgSource: '',
                template: null,
                headline: 'Interested?',
                subHeadlines: [],
                options: {}
            },
        ],
        options: {
            theme: '',
            navOptions: {
                actionButton: { title: 'SaintKatID', to: '/students/login' }
            }
        }
    },
}

export default content