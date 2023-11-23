export type Project = {
    title: string
    experienceType: string
    skillSet: string[]
    description: ProjectsDescription[]
}


export type ProjectsDescription = {
    image: string,
    imageWidth: number,
    imageHeight: number,
    description: string
}