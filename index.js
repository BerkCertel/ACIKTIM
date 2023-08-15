const express = require("express");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
//user.js üzerinden kullanıma açtığımız js kodlarını burada import ediyoruz
const userRoutes = require("./routes/user");

app.use(adminRoutes);

app.use(userRoutes);
//public dosyalarına ulaşım açıldı,"/static kısaltması ile direkt ulaşım sağlıyoruz"
app.use("/static",express.static("public"));
//boostrap kütüphanesi tanımlandı ve  node_module klasorüne ulaşım açıldı, "/libs" takma ismi ile kullanılır hale getirildi
app.use("/libs",express.static(path.join(__dirname,"node_modules")));

//"/libs" ve "/static" bulunan kod satırlarında iki farklı şekilde dosyalara ulaşım açıldı ."/static" kısmı daha  kolay bir kullanım


app.listen(3000, function () {
    console.log("Listening on port 3000");
});