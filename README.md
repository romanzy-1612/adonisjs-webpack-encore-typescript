`npm init adonis-ts-app@latest hello-world-ts`, web template

### in webpack.config.js

Change
`Encore.addEntry('app', './resources/js/app.js')`
to
`Encore.addEntry('app', './resources/frontend/src/app.ts')`

Add

```
Encore.enableTypeScriptLoader((tsConfig) => {
  tsConfig.configFile = 'resources/frontend/tsconfig.json'
})
```

# Works

- Separate tsconfig for server and client
- watch (with some hickups) and build
- Type sharing in development

# Nice to try

- Shared configuration for reuse of tsconfig values

# Doesn't work

- Before build need to manually npm install resource application dependencies
- Cannot reliably sharing type or code definitions with resource application. Type sharing works fine in dev, but fails the build. see `resources/frontend/src/app.ts`. Could not get code sharing to work
- Livereload hickups, as discribed here: `https://github.com/adonisjs/core/issues/3799#issuecomment-1185990337

Console output when reloading looks correct...

```
UPDATE: resources/frontend/src/app.ts
[ info ]  re-starting http server...
[ encore ]  WAIT  Compiling...4:37:33 PM
UPDATE: public/assets/manifest.json
[ encore ]  DONE  Compiled successfully in 101ms4:37:33 PM
[ encore ] webpack compiled successfully
[1657975053642] INFO (hello-world-web/31505 on ____): started server on 0.0.0.0:3333
```
