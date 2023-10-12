import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// db.json file path
//lowdb braucht den Pfad zur db.json
const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')

// Configure lowdb to write data to JSON file
const adapter = new JSONFile(file)
const defaultData = { user: [] }
export const db = new Low(adapter, defaultData)

//nach dem Dbset führen wir das hier aus
await db.read() // read db.json