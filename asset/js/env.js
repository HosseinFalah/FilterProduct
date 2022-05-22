export default {
    enabledEnv: "devel",

    devel: {
        apiUrl: "http://127.0.0.1:3000/"
    },
    prod: {
        apiUrl: "https://6289dc4f506abb245cf74f18--fiterproducts.netlify.app/db.json"
    },

    getApiUrl() {
        if (this.enabledEnv === "prod") {
            return this.prod
        }
        return this.devel
    }
}