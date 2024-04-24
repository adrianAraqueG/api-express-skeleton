/**
 * Environment@Config
 * your-app-name
 * 
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config(path, '.env');

const envs = {
    DEF_VALIDATE_ENVS: process.env.DEF_VALIDATE_ENVS,
}

if (envs.DEF_VALIDATE_ENVS === 'true'){
    console.log('env');
    for (let env in envs) {
        if (!envs[env]) {
            throw new Error("Some Envs aren't setted");
        }
    }
}


export default envs;