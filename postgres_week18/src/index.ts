import { Client } from 'pg';

const pgClient = new Client("postgresql://neondb_owner:npg_WKNASbBt5m8u@ep-autumn-sunset-a1l1xpyr-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

async function main(username: string, email: string, password: string) {
    await pgClient.connect();
    // const response = await pgClient.query("SELECT * FROM USERS;")
    // console.log(response.rows);

    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await pgClient.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
}

main('username5', 'user5@example.com', 'user_password').catch(console.error);