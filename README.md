# Creazione componenti 
- ng g component nomeComponente 
- In app.modules.ts nella proprietà imports aggiungere FormsModule(per gestire i form e la bidirezionlità dei valori):
```ts
@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
```
# Funzionamento componenti in una Single Page Application
- richiamare il tag del componente principale nel file index.html che verrà caricato tramite il Bootstrap presente in app.module.ts
- in app.module.ts inserire nel bootstrap il componente principale :
```ts
@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
```
# Abilitare le rotte (no refresh page al cambio dell'url)
- In app.modules.ts nella proprietà imports aggiunger AppRoutingModule(attivare le rotte):
```ts
@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
```
- Nel componente principale <app-root></app-root> aggiungere il tag: <router-outlet></router-outlet>
- In app-routing.modules.ts nell' array const routes: Routes = [] aggiungere l'URI delle rotte: 
```ts 
const routes: Routes = [
  { path: '', component: WelcomeComponent },// direttiva che punta alla WelcomeComponent quando URL è vuoto
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }, // direttiva che serve a reinderizzare l'utente su una pagina di errore nel caso di errore del URL
];
``` 
# Passare variabili tra le rotte tramite l'URI
- In app-routing.module.ts modificare la variabile routes aggiungendo al path un paraemtro come segue: 
```ts 
const routes: Routes = [
     { path: 'home/:userid', component: WelcomeComponent },// rotta che punta al componente passando un parametro "home/:userid"
];
```
- nel login component.html creare un bottone che al click invoca una funzione:
<button (click)=gestAuth()>Connetti</button>
- nel login component.ts dichiarare la variabile UserID
- aggiungere al costruttore quanto segue 
- e invoca il metodo gestAuth() che gestirà il parametro this.userID e lo passerà a al componente Home:

```ts 
userID: string = "Nicola";

constructor(private route: Router) { }

gestAuth = (): void => {
     this.route.navigate(['home', this.userID]) //viene passato il parametro userID 
}
```
- nel componente a cui punta la rotta creare una variabile per gestire il paramentro in ingresso : 

```ts
utente : string = "" 
```
- e nel costruttore :

```ts
constructor(private route: ActivatedRoute) { }  //code injection
``` 
- e nel metodo ngOnInit (metodo chiamato appena viene inizializzato il componente) :

```ts
ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid']; // passo alla varibiale utente il paramentro userid
}
```
# Ciclare un array di oggetti
- nel codice html:
```ts
*ngFor="let element of array"
```
# Router link ad una pagina 
- <a routerLink="/list">Articoli</a>
# Dichiarazione Array

- creare cartella models e poi file list.ts

- nel file creato 

```ts
export interface IArticoli {
     id: number,
     price: number,
     description: string,
     qty: number,
     available: boolean,
     data: Date
}
```
- nel componente list.compoment 

```ts
list: IArticoli[] = [
     { id: 1, price: 15, description: 'acqua e limone1', qty: 2, available: true, data: new Date() },
     { id: 2, price: 12, description: 'acqua e limone2', qty: 3, available: false, data: new Date() },
     { id: 3, price: 157, description: 'acqua e limone3', qty: 6, available: false, data: new Date() },
     { id: 4, price: 11, description: 'acqua e limone4', qty: 15, available: false, data: new Date() },
]
```
# Bootstrap(libreria) aggiunta
- ng add @ng-bootstrap/ng-bootstrap  https://ng-bootstrap.github.io/#/home
- per abilitare il javascript di bootstrap andare nel file angular.json nella proprietà script aggiungere "node_modules/bootstrap/dist/js/bootstrap.min.js": 
```js
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
# Creazione nuovi Moduli con relativi components
- ng g module nomemodulo 
- creare compenenti per modulo ng g component header --path=src/app/nomemodulo --module=nomemodulo --export 
# Sezione componenti come Header e Footer
- nel file app.module.ts importare il modulo CoreModule(in cui sono presenti i componenti Header e Footer)
- nel file root.component.html richiamare i componenti header e footer
# Passare valori dal componente padre al figlio
- nel componente figlio(importare direttiva Input()) :
```ts
@Input()
Titolo: string = "";
```
- nel componente padre 
```ts
titolo: string = "Questo è il titolo";
```
- nel componente padre quando richiamo il tag del componente figlio:
<app-jumbotron [Titolo]="titolo" [CHIAVE]="VALORE" [CHIAVE]="'hardcode'"></app-jumbotron>
# Cambiare pagina senza refresh (No href)
- al posto dell'attributo href usare :
<a class="nav-link" routerLink="/list">List</a>

- nel file core.module.ts(che sarebbe il modulo dai cui deriva il componente jumbotron) aggiungere la classe 'RouterModule':
```ts
 imports: [
    RouterModule,
  ],
```
# Coap
- sdas