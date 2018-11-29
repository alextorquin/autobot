# e - Librerías reutilizables entre aplicaciones Angular

## e.1 Crear la librería
ng generate library auth-blocks
"build:auth-blocks": "ng build auth-blocks"


## e.2 Empaquetar e instalar
"pack:auth-blocks": "npm run build:auth-blocks && cd dist/auth-blocks && npm pack"
"auth-blocks": "file:dist/auth-blocks/auth-blocks-0.0.4.tgz",

## e.3 Importar y usar
AuthBlocksModule
<lib-auth-blocks>


## e.1 Crear la librería
ng generate library welcome
"build:welcome": "ng build welcome"


## e.2 Empaquetar e instalar
"pack:welcome": "npm run build:welcome && cd dist/welcome && npm pack"
"welcome": "file:dist/welcome/welcome-0.0.4.tgz",