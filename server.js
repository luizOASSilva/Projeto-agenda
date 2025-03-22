require('dotenv').config();
const helmet = require('helmet');

const path = require('path');
const express = require('express');
const app = express();
const router = require('./src/routes/router');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const { middlewareGlobal } = require('./src/middleware/globalMiddlewares');

mongoose.connect(process.env.MONGO_URI)
    .then(resp => app.emit('successfully'))
    .catch(e => console.log(e));

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"], // Permite carregar conteúdo do mesmo domínio
        styleSrc: [
            "'self'", // Permite carregar estilos do mesmo domínio
            "https://cdnjs.cloudflare.com", // Permite o carregamento de Font Awesome e Tailwind de CDNs
            "https://kit.fontawesome.com", // Permite o carregamento do Font Awesome
            "https://ka-f.fontawesome.com", // Permite o carregamento de Font Awesome do Font Awesome Kit
            "http://localhost:9000", // Permite o carregamento de estilos do Webpack Dev Server (em desenvolvimento)
            "'unsafe-inline'" // Permite o uso de inline styles (geralmente necessário com Tailwind)
        ],
        fontSrc: [
            "'self'", // Permite fontes do mesmo domínio
            "https://cdnjs.cloudflare.com", // Permite fontes do Font Awesome de CDNs
            "https://kit.fontawesome.com", // Permite fontes do Font Awesome via kit
            "https://ka-f.fontawesome.com", // Permite fontes do Font Awesome Kit
            "http://localhost:9000", // Permite fontes do Webpack Dev Server
        ],
        scriptSrc: [
            "'self'", // Permite scripts do mesmo domínio
            "https://kit.fontawesome.com", // Permite scripts do Font Awesome
            "http://localhost:9000", // Permite o carregamento de scripts do Webpack Dev Server
            "'unsafe-inline'", // Permite o uso de inline scripts (pode ser necessário para o Babel/React)
            "'unsafe-eval'", // Permite o uso de eval (geralmente necessário para Babel)
        ],
        connectSrc: [
            "'self'", // Permite conexões com o mesmo domínio
            "http://localhost:9000", // Permite conexões com o Webpack Dev Server em desenvolvimento
            "https://ka-f.fontawesome.com", // Permite conexões com o Font Awesome Kit
        ],
        imgSrc: [
            "'self'", // Permite imagens do mesmo domínio
            "data:", // Permite imagens codificadas em base64
            "https://cdnjs.cloudflare.com", // Permite imagens de Font Awesome CDN
        ],
        objectSrc: ["'none'"], // Bloqueia o uso de objetos como Flash, etc.
        upgradeInsecureRequests: [], // Requer que todas as requisições sejam feitas de forma segura (HTTPS)
    }
}));

const sessionConfig = session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true, 
    }
});

app.use(sessionConfig);

app.use(flash());

app.use(middlewareGlobal);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use(router);

app.on('successfully', () => app.listen(3000, () => console.log('https://localhost:3000')));
