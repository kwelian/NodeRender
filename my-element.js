import { LitElement, html } from "lit-element";

export class MyElement extends LitElement{
    constructor(){
        super();
        this.saludo = 'Mundo';
        this.showLoginForm = false

    }


    static get properties(){
        return{
            saludo:{
                type: String
            }
        }
    }

    setValues(){
        this.saludo = 'Elian';
    }



    renderRegisterForm(){
        return html`
        <form>
        <label>Nombre:</label>
        <br>
        <input type=text" placeholder="Ingrese su nombre" required>
        <br>
        <br
        <label>Usuario:</label>
        <br>
        <input type=text" placeholder="Ingrese su Usuario"  required>
        <br>
        <br>
        <label>Correo:</label>
        <br>
        <input type=email" placeholder="Ingrese su correo"  required>
        <br>
        <br>
        <label>Contraseña:</label>
        <br>
        <input type="password" placeholder="Ingrese su contraseña"  required>
        <br>
        <br>
        <label>Repita su contraseña:</label>
        <br>
        <input type="password" placeholder="Ingrese su contraseña"  required>
        <br>
        <br>
        <button type="submit">Enviar</button>
        </form>
        <br>
        `;
    }
    
toggleLogin(){
    this.showLogin = !this.showLogin;
    this.requestUpdate();
}

renderLoginForm(){
    return html`
    <form>
    <label>Usuario:</label>
    <br>
    <input type=text" placeholder="Ingrese su usuario" required>
    <br>
    <br>
    <label>Contraseña:</label>
    <br>
    <input type="password" placeholder="Ingrese su contraseña"  required>
    <br>
    <br>
    <button type="submit">Enviar</button>
    <br>
    </form>
    <br>
    `;
}

    render(){
        return html`
                <ul>
                    <li>
                        ${this.showLogin ? this.renderLoginForm() : this.renderRegisterForm()}
                        <button @click="${this.toggleLogin}">${this.showLogin ? 'Registro' : 'Iniciar Sesion'}</button>
                    </li>
                </ul> 
        `;
    }
}





customElements.define('my-element', MyElement);