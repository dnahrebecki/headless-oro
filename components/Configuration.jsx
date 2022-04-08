import config from '../config/configuration.json'
// import config from '../config/configuration_lt.json'
// ORO BACKEND: lt --port 80 --subdomain oro-headless-api --local-host headless-oro.localhost
// REACT FRONTEND: lt --port 3000 --subdomain oro-headless

export default function Configuration() {
    return config;
}