Hier is een **README.md** die je kunt gebruiken voor je Express.js boekenwinkelproject:  

---

# Boekenwinkel - Express.js Webapp  

Dit project is een eenvoudige boekenwinkel gebouwd met **Express.js**. Het bevat routing voor **GET** en **POST** requests, middleware voor JSON-verwerking, en is gegenereerd met **Express Generator**.  

## Inhoud  

- [Installatie](#installatie)  
- [Projectstructuur](#projectstructuur)  
- [Routes](#routes)  
- [Middleware](#middleware)  
- [Starten van de server](#starten-van-de-server)  

## Installatie  

1. **Clone de repository**  
   ```sh
   git clone <repository-url>
   cd boekenwinkel
   ```  

2. **Installeer de dependencies**  
   ```sh
   npm install
   ```  

3. **Start de server**  
   ```sh
   npm start
   ```  

4. **De server draait nu op**  
   ```
   http://localhost:3000
   ```  

## Projectstructuur  

```
boekenwinkel/
│── bin/             # Startscript voor de server
│── public/          # Statische bestanden (CSS, afbeeldingen, JS)
│── routes/          # Express routes
│   ├── index.js     # Homepage route
│   ├── users.js     # Gebruikersroute
│── views/           # Views (Jade/Pug templates)
│── app.js           # Hoofd Express-applicatie
│── package.json     # Projectconfiguratie en dependencies
│── README.md        # Documentatie (dit bestand)
```  

## Routes  

| Methode | Route     | Beschrijving           |
|---------|----------|------------------------|
| GET     | `/`      | Homepage               |
| GET     | `/users` | Gebruikersoverzicht    |
| POST    | `/books` | Voeg een boek toe      |

**Voorbeeld van een GET-request:**  

```sh
curl -X GET http://localhost:3000/
```  

**Voorbeeld van een POST-request:**  

```sh
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "Node.js for Beginners", "author": "John Doe"}'
```  

## Middleware  

Het project maakt gebruik van de volgende middleware:  

- `express.json()` → Parseert JSON body  
- `express.urlencoded({ extended: false })` → Parseert URL-gecodeerde data  
- `cookie-parser` → Handelt cookies af  
- `morgan` → Logt inkomende requests  

## Server starten & stoppen  

- **Starten:**  
  ```sh
  npm start
  ```  

- **Stoppen:**  
  In de terminal **Ctrl + C** indrukken.  

## Extra  

Wil je de server automatisch laten herstarten bij wijzigingen? Installeer dan **nodemon**:  

```sh
npm install -g nodemon
nodemon bin/www
```  

---  
