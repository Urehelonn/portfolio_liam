export const DATA = {
    base_url: "https://urehelonn.github.io/porfolio_liam",
    introduction_paragraph:
        "I'm a new Computer Science graduate seeking a developer position to contribute my "
        + "programming skills and knowledge in a dynamic organization.",

    profile1: [
        "Highly motivated and experienced problem solver with a positive attitude and eager to learn.",
        "Demonstrated programming skills and experience with the knowledge on web development.",
        "Dedicated to completing projects and tasks in a timely manner.",
        "Highly adaptable, flexible developer who embraces teamwork, but also enjoys working independently.",
        "Always willing to learn, and take responsibility."
    ],
    profile2: [
        "Strong OOP concept and hands-on modern web development experience.",
        "Agile development process (Scrum); Hands-on experiences in JIRA; Version control system: Git."
    ],
    tech_stacks: {
        programming_languages: ["Java", "JavaScript (ES6)", "TypeScript", "C#"],
        front_end: ["Angular 8", "jQuery", "HTML", "CSS", "Bootstrap", "XML", "React"],
        back_end: ["NodeJS", "Express", "Spring Boot", "Hibernate", "ASP .Net"],
        database: ["MySQL", "MongoDB", "SQLite"],
        others: ["Unity", "Android Studio", "Photoshop", "Unit Testing", "AWS", "Linux(Ubuntu)"],
    },
    project: [
        {
            id: 0,
            name: 'Restaurant Web Builder',
            title_image: "https://i.ibb.co/F6dz1Fv/Screenshot-from-2020-04-11-05-08-34.png",
            description: 'A web application to help resturant owner build their own menu website.',
            content: [
                "Developed restaurant website builder which helps user to create websites for their restaurant, using Angular, Spring boot and MySQL.",
                "Analyzed the requirements and used Jira, Github for version control and ticket tracking.",
                "Implemented a stylish website using Bootstrap, SCSS, with Angular.",
                "Used Java Persistence API(JPA)+Hibernate to persistently store the vast amounts of data into the database.",
                "Created builder pages to let users modify their restaurant page using builder service and controller.",
                "Provided user authentication functions, with email confirmation needed, using user controllers and services.",
                "Deployed using Dockers, Nginx, on AWS EC2 CentOS instance."
            ],
            image: "https://i.ibb.co/kDgfCDJ/Screenshot-from-2020-04-11-04-51-33.png",
            path: "project/0"
        },
        {
            id: 1,
            name: 'Broker SaaS Application',
            description: 'A web application to help user find the right travelling insurance broker.',
            content: [
                "Developed broker SaaS website for users to choose different brokers with different travel insurance companies and plans, using Angular, NodeJS Express, and MySQL.",
                "Separate users’ role to user account and broker account with authentication",
                "Design and created traveling companies’ database, and filter system for users to enter their cost budget, age, and insurance affecting time to filter and get insurance company’s information at back end.",
                "Created brokers’ profile page, brokers can edit the information they provide to users on their profile page, and has permission to post articles with rich text editor to inform or advertising their business to users, design and implemented both front and back end.",
            ],
            image: "",
            path: "project/1"
        },
        {
            id: 2,
            name: 'Online Order Management System',
            description: 'A web application build for client to do order management for his factory.',
            content: [
                "Developed single-page order management website which helps the client to create and manage their orders, "
                + "factories can use the system to update production processes to the client, and the client's customers can use the "
                + "system to check their order status, used Angular, Spring Boot and MySQL.",
                "Analyzed the requirements and used Jira, Gitlab for version control and ticket tracking.",
                "Implemented a stylish website using Bootstrap, SASS, with Angular.",
                "Used Java Persistence API(JPA)+Hibernate to persistently store vast amounts of data into the database, with "
                + "code-first flow for migration.",
                "Created order management pages to create orders, manage orders, or check order details, based on order’s "
                +"different stage, and user’s role.",
                "Provided user authentication functions with different roles, ‘super-admin’ as client’s role which has all "
                +"permission, and ‘user’ role has limited permission so customers will not see the other customers’ order details,"
                +"and user account could not edit order either. ‘admin’ account is used to check sub-order details and to edit the "
                +"producing status.",
                "Created producing system so the client can track the production status from the record factory’s providing.",
                "Created delivering system so factories can report the shipment of the products, and the client can keep track of the "
                +"products."
            ],
            image: "",
            path: "project/2"
        },

    ],
    personal_info: {
        github_page: "https://github.com/Urehelonn",
        gitlab_page: "https://gitlab.com/Urehelonn",
        location: "Maple, Vaughan, York Region, GTA Area, ON, Canada",
        description: "",
        closure: "Thank you for checking out my portfolio, here's some of my fuzzy friend's photo, hope you enjoy those as I do!",
        fuzzy_img1: "",
        fuzzy_img2: ""
    }
};

export default DATA;