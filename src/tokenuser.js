import jwtDecode from "jwt-decode";
import SecureLS from "secure-ls";
var ls = new SecureLS({ encodingType: 'aes' });
let encrypttoken = ls.get('curentTokken')
let objectData
if (encrypttoken !== null) {
    objectData = jwtDecode(encrypttoken)
} else {
    objectData = {}
}

export default objectData