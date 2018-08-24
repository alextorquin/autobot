# 2 - Páginas y rutas Angular SPA

## 2.1 Generación automática
- ./scripts/g-feature.sh '' about
- ./scripts/g-feature.sh '' car
- ng g c about/about/info --flat
- ng g c about/about/links --flat

## 2.2 Core para compoentes de instancia única

### 2.2.1 App component simplificado
- Delega en `NavigatorComponent`
- El cual se descompone en `HeaderComponent` , `MainComponent` y `FooterComponent`


