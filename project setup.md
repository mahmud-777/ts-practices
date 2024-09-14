"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",

"build":"tsc",
"watch": "tsc -w",
"start": "npm run dev",
"dev": "node dist/save-person.js"

},

npm run watch
npm run dev

# **************************\*\***************************

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"clean": "rm -rf dist/\*",

     "build": "npm run clean && tsc",
     "watch": "tsc -w",
     "dev": "nodemon dist/crud.js",
     "start": "npm run build && npm run dev"

},
