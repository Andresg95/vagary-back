# vagary-back
# vagary-back


Son dos tablas apenas las que te adjunto en el .sql
Antes que nada, el campos de password está con 200 de longitud. Queda a tu consideración aumentarle al número que veas conveniente y de igual forma el resto de campos. Por otro lado, siempre te enviaré Strings.

De ahí pues necesito los siguientes endpoints:
- Login/verifyNumber: Vas a verificar en la tabla "Phones" si existe o no el número de teléfono. Te pasaré "extension" y "number". Vas a verificarlo con los campos "Number" y "Extension" de la Tabla. En caso de no encontrar resultado enviame un "False" y en caso de que exista un "True".

- Login/Login: Vas a verificar si existe ese usuario con la contraseña en la tabla "Users". Verifica sensibilidad de mayúsculas y minúsculas con la contraseña solamente. Te pasaré "nickname" y "password" y los verificas con los campos "Nickname" y "Password". Si no existe el usuario, devolveme un array vacio. De lo contrario enviame toda la info del usuario excepto "Password" y "KeyToken"

- Login/Register: Este endpoint sirve para registrar al usuario. Te enviaré "name", "nickname", "email", "birthday", "gender", keytoken", "country", "city", "password", "avatar" y colocalos en sus respectivos campos. Si todo está ok, entonces enviame un "true".

- Login/Gmail: Este endpoint es para verificar que exista el usuario pasandole el correo. Te pasaré "email" y lo verificaras con la columna "Email" de la tabla "Users". Si existe, devolveme en un array toda la info del usuario excepto "Keytoken" y "Password", de lo contrario devolveme array vacio.

- Login/UpdateToken: Este endpoint es para actualizar el token del teléfono del usuario en la tabla "Users". Te pasaré "keytoken" y lo actualizás en su campo "Keytoken".  Si está ok solo enviame "True".