import { Database } from 'sqlite3'


const db: any = new Database('scoreboard.db')

function run(sql: string, params: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err: Error, rows: any[]) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(rows)
            }
        })
    })
}
function once(sql: string, params: any[]): Promise<any> {

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

function each(sql: string, params: any[]): Promise<any> {

    return new Promise((resolve, reject) => {
        db.each(sql, params, (err: Error, rows: object[]) => {
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


export { run, all, once, each }
