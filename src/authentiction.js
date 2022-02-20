class Auth {
    constructor() {
        this.isAuthenticed = false
    }
    login(callback) {
        this.isAuthenticed = true
        callback()
    }
    logout(callback) {
        this.isAuthenticed = false
        callback()
    }
    isAuthed() {
        return this.isAuthenticed
    }
}
export default new Auth()