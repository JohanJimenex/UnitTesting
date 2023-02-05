export function saludar(nombre: string): string {
    return 'Hello ' + nombre;
}

export class Jugador {

    public hp: number = 100;

    disminuirHp(cantidad: number): void {

        if (cantidad < 0) {
            return;
        }

        if (cantidad >= this.hp) {
            this.hp = 0;
            return;
        }
        this.hp -= cantidad;
    }
}
