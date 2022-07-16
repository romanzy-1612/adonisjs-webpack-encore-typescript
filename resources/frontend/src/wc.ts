import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

//decorators work, confirms that we are using frontend tsconfig
@customElement('app-component')
export class AppComponent extends LitElement {}
