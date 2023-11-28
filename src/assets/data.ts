import { Project } from '@/assets/commonTypes/projectTypes';

export const DATA = {
  base_url: 'https://urehelonn.github.io/porfolio_liam',
  introduction_paragraph:
    'I\'m a new Computer Science graduate seeking a developer position to contribute my ' +
    'programming skills and knowledge in a dynamic organization.',

  profile1: [
    'Highly motivated and experienced problem solver with a positive attitude and eager to learn.',
    'Demonstrated programming skills and experience with the knowledge on web development.',
    'Dedicated to completing projects and tasks in a timely manner.',
    'Highly adaptable, flexible developer who embraces teamwork, but also enjoys working independently.',
    'Always willing to learn, and take responsibility.',
  ],
  profile2: [
    'Strong OOP concept and hands-on modern web development experience.',
    'Agile development process (Scrum); Hands-on experiences in JIRA; Version control system: Git.',
  ],
  tech_stacks: {
    programming_languages: ['Java', 'JavaScript (ES6)', 'TypeScript', 'C#'],
    front_end: [
      'Angular 8',
      'jQuery',
      'HTML',
      'CSS',
      'Bootstrap',
      'XML',
      'React',
    ],
    back_end: ['NodeJS', 'Express', 'Spring Boot', 'Hibernate', 'ASP .Net'],
    database: ['MySQL', 'MongoDB', 'SQLite'],
    others: [
      'Unity',
      'Android Studio',
      'Photoshop',
      'Unit Testing',
      'AWS',
      'Linux(Ubuntu)',
    ],
  },
  project: [
    {
      id: 0,
      name: 'Restaurant Web Builder',
      title_image:
        'https://i.ibb.co/F6dz1Fv/Screenshot-from-2020-04-11-05-08-34.png',
      description:
        'A web application to help resturant owner build their own menu website.',
      stacks: 'Angular, Spring Boot, MySQL, Docker',
      content: [
        'Developed restaurant website builder which helps user to create websites for their restaurant, using Angular, Spring boot and MySQL.',
        'Analyzed the requirements and used Jira, Github for version control and ticket tracking.',
        'Implemented a stylish website using Bootstrap, SCSS, with Angular.',
        'Used Java Persistence API(JPA)+Hibernate to persistently store the vast amounts of data into the database.',
        'Created builder pages to let users modify their restaurant page using builder service and controller.',
        'Provided user authentication functions, with email confirmation needed, using user controllers and services.',
        'Deployed using Dockers, Nginx, on AWS EC2 CentOS instance.',
      ],
      image: 'https://i.ibb.co/kDgfCDJ/Screenshot-from-2020-04-11-04-51-33.png',
      path: 'project/0',
    },
    {
      id: 1,
      name: 'Broker SaaS Application',
      description:
        'A web application to help user find the right travelling insurance broker.',
      stacks: 'Node JS, Express, Angular, MySQL, MongoDB',
      content: [
        'Developed broker SaaS website for users to choose different brokers with different travel insurance companies and plans, using Angular, NodeJS Express, and MySQL.',
        'Separate users’ role to user account and broker account with authentication',
        'Used TypeORM to persistently store the vast amounts of data into the database.',
        'Design and created traveling companies’ database, and filter system for users to enter their cost budget, age, and insurance affecting time to filter and get insurance company’s information at back end.',
        'Created brokers’ profile page, brokers can edit the information they provide to users on their profile page, and has permission to post articles with rich text editor to inform or advertising their business to users, design and implemented both front and back end.',
      ],
      image: '',
      path: 'project/1',
    },
    {
      id: 2,
      name: 'Online Order Management System',
      description:
        'A web application build for client to do order management for his factory.',
      stacks: 'Angular, Spring Boot, MySQL',
      content: [
        'Developed single-page order management website which helps the client to create and manage their orders, ' +
        'factories can use the system to update production processes to the client, and the client\'s customers can use the ' +
        'system to check their order status, used Angular, Spring Boot and MySQL.',
        'Analyzed the requirements and used Jira, Gitlab for version control and ticket tracking.',
        'Implemented a stylish website using Bootstrap, SASS, with Angular.',
        'Used Java Persistence API(JPA)+Hibernate to persistently store vast amounts of data into the database, with ' +
        'code-first flow for migration.',
        'Created order management pages to create orders, manage orders, or check order details, based on order’s ' +
        'different stage, and user’s role.',
        'Provided user authentication functions with different roles, ‘super-admin’ as client’s role which has all ' +
        'permission, and ‘user’ role has limited permission so customers will not see the other customers’ order details,' +
        'and user account could not edit order either. ‘admin’ account is used to check sub-order details and to edit the ' +
        'producing status.',
        'Created producing system so the client can track the production status from the record factory’s providing.',
        'Created delivering system so factories can report the shipment of the products, and the client can keep track of the ' +
        'products.',
      ],
      image: '',
      path: 'project/2',
    },
    {
      id: 3,
      name: 'Pizza Order Application',
      description:
        'A web application to order pizza, with functionalities to manage its topping, and check order details.',
      stacks: 'Angular, Node.js, Express Boot, MongoDB',
      content: [
        'Developed pizza order application website which allows users to order pizza, with a variety of toppings, using ' +
        'Angular, Node.js, Express and MongoDB.',
        'Implemented a stylish website using Bootstrap, SASS, with Angular Animation effects.',
        'Converted json data to objects with types using Typeorm, allows programming with virtual object database.',
        'Provided user authentication functions with token-based authentication, with different role settings.',
        'Implemented application functions with RESTful web services controllers for server-side using Express, makes it ' +
        'more suitable for internet usage.',
      ],
      image: '',
      path: 'project/3',
    },
    {
      id: 4,
      name: 'Task Timing App',
      description: 'An Android application created for task\'s time tracking.',
      stacks: 'Android Studio, Java, SQLite',
      content: [
        'Github repo: https://github.com/Urehelonn/as-prac-task-timer',
        'Developing Android app using Android Studio and SQLite to help user for event timing.',
        'Analyzed the requirements and used Github for version.',
        'Used SQLite database to persistently store the vast amounts of data into the database on android device.',
        'Created SQLiteHelper and Content Provider classes to normalize SQL action instead of raw SQL query command.',
        'Created different activities and layout for task list and task editing (creating).',
        'Used Recycler View and Recycler Adapter to fill up task list information from database dynamically.',
        'Provided deletion confirmation using Dialog, in case of accident click.',
        'With different fragments, main activity is allowed to provide task editing or creating as well using Fragment Manager.',
        'Still in progress, including task timing calculation and update, landscape functionalities.',
      ],
      image: '',
      path: 'project/4',
    },

    {
      id: 5,
      name: 'Movie Management Website (xMovies)',
      description:
        'A movie manage website to provide movie information, and share towards customer and movie manager.',
      stacks: 'ASP.NET, Razor, SQL Server',
      content: [
        'Github repo: https://github.com/Urehelonn/xMovies',
        'Developed movie management website to provide movie source sharing towards customer and movie manager ' +
        'using ASP.NET independently.',
        'Analyzed the requirements and drew diagram using sequence diagram and Kan-ban.',
        'Implemented application functions with MVC design patterns and made it to fit the SOLID principle.',
        'Implemented ASP.Net Identity with OAuth2 (Facebook as third party) for authentication to secure web API.',
        'Deigned movie managing database with SQL Server following normalization form (NF).',
        'Used Entity Framework for data mapping, to apply schema changed to production database, with code-first flow' +
        ' for migration.',
      ],
      image: '',
      path: 'project/5',
    },
  ],
  personal_info: {
    github_page: 'https://github.com/Urehelonn',
    gitlab_page: 'https://gitlab.com/Urehelonn',
    location: 'Maple, Vaughan, York Region, GTA Area, ON, Canada',
    description: '',
    closure:
      'Thank you for checking out my portfolio, here\'s some of my fuzzy friend\'s photo, hope you enjoy those as I do!',
    fuzzy_img1: '',
    fuzzy_img2: '',
  },
};

export const projects: Project[] = [
  {
    title: 'Bread Platform',
    experienceType: 'at Bread Financial, Virtusa',
    skillSet: ['Golang', 'RESTful', 'gRPC', 'PostgreSQL'],
    description: [
      {
        image: 'collectionService.png',
        imageWidth: 1800,
        imageHeight: 800,
        description:
          'Worked as a full-stack developer mainly on the backend for this loan servicing platform using Golang. Implement new features, testing, and maintaining the microservices based on Jira tickets for different microservices, including Notification, Collections, Payment, and Debt Consolidation services; On-call tickets to check on the payments, and cooperate with the customer support team and other technical teams to solve customers\' problems, or fix existing feature bugs;',
      },
      {
        image: 'notificationService.jpeg',
        imageWidth: 800,
        imageHeight: 800,
        description:
          'Add RESTful endpoints to existing logic that use GRPC endpoints, add API spec and create the management tool\'s UI according to the API spec and Figma designs provided by the frontend team; Cooperate with frontend to design new features on the management tools based on existing features and refactor components;',
      },
    ],
  },
  {
    title: 'Lap99',
    experienceType: 'at AST Networks',
    skillSet: ['Angular', 'Java Spring Boot', 'MySQL', 'AWS(EC2)', 'Docker'],
    description: [
      {
        image: 'lap99.jpeg',
        imageWidth: 400,
        imageHeight: 500,
        description:
          'Worked as a Full Stack Developer for this online lottery tickets purchasing service providing and management website, for 5 popular lotto types.',
      },
      {
        image: 'lap99admin.jpeg',
        imageWidth: 600,
        imageHeight: 500,
        description:
          'Different system that allows admin to check all user information, check all group play information, and check purchased tickets information.',
      },
      {
        image: '',
        imageWidth: 600,
        imageHeight: 500,
        description:
          'Allows users to add ticket into watch list, purchase ticket, create combination of tickets to cover more numbers for a better winning chance, and join group play to share the winning with other group players.',
      },
      {
        image: 'lap99result.jpeg',
        imageWidth: 600,
        imageHeight: 500,
        description:
          'Users also get email for draw result notification sent automatically after winning result data is updated;',
      },
      {
        image: 'lap99statistics.jpeg',
        imageWidth: 500,
        imageHeight: 500,
        description:
          'Show statistics for users; Scheduled cron controller extracting data every day for different type of lotto draw results; ',
      },
      {
        image: 'lap99graph.jpeg',
        imageWidth: 500,
        imageHeight: 500,
        description:
          'Graphic display and data analyzed gives user more thought on number picking;',
      },
    ],
  },
  {
    title: 'iPayIt',
    experienceType: 'at AST Networks',
    skillSet: ['Angular', 'Java Spring Boot', 'MySQL', 'AWS(EC2)', 'Docker'],
    description: [
      {
        image: 'ipayitInvoice.jpeg',
        imageWidth: 500,
        imageHeight: 500,
        description:
          'An invoice management and online payment processing system ideal for small business.',
      },
      {
        image: 'ipayitLogin.png',
        imageWidth: 800,
        imageHeight: 500,
        description:
          'Merchant users: Create invoices, and email the invoice notice to their clients; Payments will be saved as credit into their accounts;     Client users: Check payment history; Use reward points to cover for the payment;      Admin users: Check all invoices and payments, credit changing histories, user information',
      },
      {
        image: 'ipayitInvoice2.jpeg',
        imageWidth: 800,
        imageHeight: 500,
        description:
          'After create invoices, email invoice with detail can be easily sent to the client via api or in merchant invoice management page; All emails sent are using predefined template resource assets, can be easily replaced in the feature;',
      },
      {
        image: 'ipayitPaymentForm.jpeg',
        imageWidth: 900,
        imageHeight: 500,
        description:
          'Payment can be done from iPayIt.com payment page, or through API calls; Payment though  iPayIt.com payment page can also pay using Crypto.com for crypto currency payment;',
      },
    ],
  },
  {
    title: 'More Experience',
    experienceType: 'at Variaty of places',
    skillSet: ['Java(Spring Boot)', 'Golang', 'TypeScript', 'JavaScript', 'React(Next.js)', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'RESTful','gRPC', 'MySQL', 'PostgreSQL', 'Git', 'Jira', 'ClickUp', 'Figma', 'Docker', 'AWS',
    ],
    description: [
      {
        image: '',
        imageWidth: 0,
        imageHeight: 0,
        description:
          'Also contributed to various projects, including the development of an Order Management System, a Pizza Order Web Application, a Machine Learning Pipeline Platform, an Immigration Case Management System, and more.',
      },
    ],
  },
];
export default DATA;
