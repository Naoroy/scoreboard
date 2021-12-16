
// interface Job {
//     id: string ,
//     date: Date,
//     task: string,
//     sessionsEstimate: number,
//     sessions: number,
//     sessionLength: number,
//     comment: string
// }
/*interface JobInterface {
    job: Job
}*/

export default interface JobInterface{
    id: number;
    task: string;
    date: Date;
}
