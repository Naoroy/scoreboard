type User = {
    Id?: number
    Name: string
    Password: string
    Email: string
}

type Task = {
    Id?: number
    UserId: number
    Name: string
    Duration: number
    Description?: string
    Comments?: string
    isArchived: boolean
}

export { User, Task }
