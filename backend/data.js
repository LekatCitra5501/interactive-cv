// backend/data.js
const educationHistory = [ 
    { id: 1, period: '2020 - 2023', institution: 'SMAN 1 Karangkobar' },
    { id: 2, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' }
];
const skills = [ 
    { name: 'Vue.js', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'JavaScript', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', level: 'Mahir', logo: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
    { name: 'Git & GitHub', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const projects = [ 
    {
        title: 'Website Toko Online',
        image: '/public/web.png',
        description: 'Platform e-commerce dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Laravel', 'MySQL'],
        link: '#',
    },
];

export { educationHistory, skills, projects };