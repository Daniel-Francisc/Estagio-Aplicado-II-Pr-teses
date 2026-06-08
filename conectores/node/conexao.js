import { loadEnvFile } from 'node:process';
import { createClient } from '@supabase/supabase-js';

loadEnvFile('../.env');

class Connection {
    constructor() {
        this.client = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_KEY
        );
    }
    
    getClient() {
        return this.client;
    }
}

const connection = new Connection();

export default connection;