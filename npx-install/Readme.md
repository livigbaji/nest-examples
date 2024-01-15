# NPX NestJS Installation

I usually work on multiple project with different versions of software,
so I try as much as possible not to get tied to a particular version in perpetuity 
because I started using it in one project

```sh
$ npm init -y && npm i -D @nestjs/cli
$ npx nest new <application-name>
$ rm -rf node_modules package*.json
$ code <application-name>
```

This approach makes sure you get the latest version of nestjs when starting a new project, 
instead of copying and pasting stale ones OR maintaining a global nest install.