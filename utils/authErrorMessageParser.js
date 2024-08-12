export default function(errorCode){
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi"
         case "auth/missing-password":
            return "Geçersiz şifre"
        default:
            return errorCode;
    }
}