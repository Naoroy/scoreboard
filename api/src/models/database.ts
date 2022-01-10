import { Database } from 'sqlite3'


const db: any = new Database('scoreboard.db')

function run(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
        db.run(sql, (err: Error, rows: any[]) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(rows)
            }
        })
    })
}

function query(sql: string, params: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err: Error, rows: object[]) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(rows)
            }
        })
    })
}

function all(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
        db.all(sql, (err: Error, rows: object[]) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(rows)
            }
        })
    })
}

export { run, all, query }
