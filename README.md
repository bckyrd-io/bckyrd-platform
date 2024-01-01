# The Platform 
This is just a platform for electronics enthusiast , will scale as we go

only commit if you prove its working correctly on your machine !
  
- a web platform where we build stuff,
- and a subdomain website for freelancing

## the platform structure
```
my-fullstack-app/
  |- src/
      |- components/
      |- App.js
      |- index.js
      |- ...
      |- (other React files)
  |- server/
      |- controllers/
      |- models/
      |- routes/
      |- app.js
  |- package.json (root package.json)

```

## prisma db migration
1. install prisma globally
```
npm install -g prisma
```
2. migrate prisma data
```
prisma migrate dev --name init
```
or. if already done
```
prisma migrate deploy
```
