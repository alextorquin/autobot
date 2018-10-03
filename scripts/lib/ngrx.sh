# ng add @ngrx/store
# ng add @ngrx/effects

# npm install @ngrx/schematics --save-dev
# ng config cli.defaultCollection @ngrx/schematics
# npm install @ngrx/store-devtools @ngrx/router-store --save
ng generate store Global -m core/core.module.ts --statePath core/store/global/reducers
ng g effect Cars --root --module=./../../../core.module.ts

# https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
