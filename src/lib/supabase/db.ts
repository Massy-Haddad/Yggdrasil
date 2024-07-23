import * as dotenv from 'dotenv'
import * as schema from '../../../migrations/schema'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

config({ path: '.env' })

const client = postgres(process.env.DATABASE_URL!)
const db = drizzle(client)

const migrateDb = async () => {
	try {
		console.log('🟧 Migrating client')
		await migrate(db, { migrationsFolder: 'migrations' })
		console.log('🟩 Successfully Migrated')
	} catch (error) {
		console.log('🟥 Error Migrating client', error)
	}
}
migrateDb()

export default db
