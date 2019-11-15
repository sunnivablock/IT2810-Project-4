# README  
## Prosjekt 4 IT2810  

I prosjekt 4 har vi laget en mobilapplikasjon, som en videreføring av prosjekt 3, i React Native. 

Applikasjonen har tre navigasjonssider. “Home page” har funksjonalitet for listebasert visning av dataobjektene i databasen, for søk og sortering av og i disse, samt at det er mulig å vise detaljert informasjon om hvert av objektene. Dette vises nederst på siden ved klikk på det aktuelle objektet. Tabellen vår viser ti objekter per side, og har funksjonalitet som gjør det mulig å bla frem og tilbake i tabell-sidene. “Add new”-siden gir brukeren muligheten til å legge til en ny person til databasen. “My favorites” gjør det mulig å legge til en personlig favoritt, som lagres persistent på enheten ved hjelp av AsyncStorage. 

## KRAV TIL BRUK AV TEKNOLOGI

Prosjektet er laget med React Native, og vi har benyttet oss av Expo-verktøyet i utviklingen av prosjektet. Vi brukt vår egen backend fra prosjekt 3 som ligger ute på vm, og denne er det ikke utført endringer på. Vi har benyttet oss av funksjonelle komponenter der det ikke var behov for å håndtere states, og klassekomponenter der det har vært mest hensiktsmessig - eksempelvis i FavoritesPage der state i en kort tid holder på navnet som skal lagres til AsyncStorage.

For å installere Expo CLI, trengte vi Node.js. For å deretter lage et React Native-prosjekt ved bruk av Expo, startet vi med å laste ned kommandolinje-verktøyet:  
`npm install expo-cli --global`  

Før vi opprettet et prosjekt ved å bruke kommandoene:  
`expo init my-new-project`  
`cd my-new-project`  
`expo start`  

Vi valgte en template som ga oss innebygde navigasjon-tabs. Deretter brukte vi Expo Client-appen på enhetene våre til å åpne applikasjonen. 

For den tredje navigasjonssiden har vi implementert AsyncStorage ved å gi brukeren mulighet til å lagre navnet på sin favorittperson på sin enhet. Dette er en enkel, men tilfredsstillende implementasjon av kravet til AsyncStorage. Dette lagres mellom hver gang appen kjører, og vil vises hver gang den samme enheten benyttes for appen (med mindre det utføres endringer av brukeren selv). 

Kravet om bruk av Expo har dog ført til noe trøbbel for oss. Da det å legge til nye personer i databasen var en stor og viktig funksjonalitet i prosjekt 3, var det funksjonalitet vi ønsket å ta med inn i prosjekt 4 og React Native-appen. 

En ny endring i iOS gjør at AppTransportSecurity blokkerer cleartext HTTP-tilkoblinger. Denne innstillingen kan vanligvis overkjøres i React Native i info.plist-filen. I builden med Expo er det ikke mulig å endre disse verdiene, da innstillinger fra info.plist-filen er delvis integrert i app.json i stedet. Her er det kun enkelte innstillinger som kan overkjøres - der AppTransportSecurity ikke er en av de. Ettersom bruk av Expo var et krav, vil det dermed ikke fungere å poste til databasen fra en iOS-enhet, da post til databasen vår er avhengig av en HTTP-tilkobling. Vi har derimot valgt å beholde funksjonaliteten med å legge til ny person til databasen, da dette fungerer veldig fint på Android (og i nettleseren på datamaskin), og er en stor del av funksjonaliteten til idéen bak prosjektet vårt. Da bruk av Expo også var et krav, og vi ikke hadde grunnlag for å vite at AppTransportSecurity ikke kunne overkjøres med Expo, lot vi dette stå. 

Prosjekt 4 satte ingen spesifikke krav til bruk av Redux, slik som prosjekt 3. Vi har allikevel valgt å ta med oss dette videre fra forrige prosjekt, og håndterer states ved hjelp av Redux også denne gangen der vi har sett dette som mest hensiktsmessig. 

## GJENBRUK OG PLATTFORM-SPESIFIKK KODE  

Litt av hensikten med dette prosjektet var å bruke mye av den samme koden fra prosjekt 3, inn i prosjekt 4. Dette viste seg å by på en større mengde arbeid enn forespeilet, da vi i prosjekt 3 hadde basert mye av hovedfunksjonaliteten på tredjepartskomponenter og eksterne bibliotek, som viste seg å ikke være kompatible med React Native. Dermed måtte vi skrive mye av koden på nytt i prosjekt 4, men vi ser dog på dette som et desto større læringsutbytte (og litt mer klok av skade). Dog ser vi at det også er store likheter mellom React og React Native, og konverteringen mellom de to er håndterbar. 

All bruk av redux i dette prosjektet bruker de samme reducers og actions som i prosjekt 3.

En fordel med React Native er at samme kodebase kan brukes for en applikasjon for flere plattformer. I dette prosjektet har vi for enkelhetens skyld forsøkt å unngå plattform-spesifikke komponenter, og har dermed ikke skrevet plattform-spesifikk kode for Android og iOS. 

## TESTING  

Applikasjonen er manuelt ende-til-ende-testet på både Android og iOS, og den fungerer godt på begge enheter. Testing på begge disse mobile enhetene har blitt gjennomført kontinuerlig under utviklingen av prosjektet. 
  
Se punktet om posting til database under “krav til teknologi” om post til database på iOS. 

## HVORDAN KJØRE PROSJEKTET    
For å kjøpre applikasjonen må enheten du vil teste på være tilkoblet NTNUnettverket(eventuelt via VPN).  
Åpne terminal for mappen du vil lagre prosjektet i:  
`git clone https://gitlab.stud.idi.ntnu.no/IT2810-H19/teams/team-9/webprosjekt4.git`  
`cd webprosjekt4`  
`npm install`  
`npm start`  
Scann QR kode med expo-app(android) eller kamera-app(IOS) for å se prosjektet  


## RESSURSER OG TREDJEPARTSKOMPONENTER  

For informasjon om komponenter i React Native, har vi primært basert oss på følgende nettside:  
https://facebook.github.io/react-native/docs/components-and-apis.html  

For en enkel og håndterbar implementasjon av AsyncStorage, har vi basert oss på følgende eksempel:  
https://amanhimself.dev/building-offline-react-native-apps-with-asyncstorage  
