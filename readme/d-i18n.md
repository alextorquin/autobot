# d - Internacionalización de aplicaciones con Angular

## d.1 xi18n

### d.1.1 Etiquetado
18n="@@welcome"
i18n-caption="@@home_list_caption"
i18n="@@access_minlength_password"

### d.1.2 Extracción
ng xi18n --output-path locale
/locale/messages.xlf

### d.1.3 Traducción
/locale/messages.es.xlf
source -> target

## d.2 Despliegue

### d.2.1 Configuracion
angular.json -> configurations.es
outputPath
i18nFile
i18nLocale
fileReplacements
baseHref

### d.2.2 Ficheros
environments
index.html
assets
