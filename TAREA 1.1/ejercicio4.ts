
class CuentaBancaria {
    titular: string;
    private saldo: number; 

    constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
        console.log(`Cuenta creada para ${this.titular}. Saldo inicial: $${this.saldo}`);
    }

    depositar(monto: number): void {
        if (monto <= 0) {
            console.error("Error: El monto a depositar debe ser un número positivo.");
            return;
        }
        this.saldo += monto;
        console.log(`Depósito de $${monto} realizado. Nuevo saldo: $${this.saldo}`);
    }


    retirar(monto: number): void {
        if (monto <= 0) {
            console.error("Error: El monto a retirar debe ser un número positivo.");
            return;
        }
        if (monto > this.saldo) {
            console.error("Error: Saldo insuficiente.");
            return;
        }
        this.saldo -= monto;
        console.log(`Retiro de $${monto} realizado. Nuevo saldo: $${this.saldo}`);
    }


    consultarSaldo(): void {
        console.log(`El saldo actual de la cuenta de ${this.titular} es: $${this.saldo}`);
    }
}


const miCuenta = new CuentaBancaria("Juan Pérez");
miCuenta.depositar(500);
miCuenta.depositar(-100); // Muestra un error
miCuenta.retirar(150);
miCuenta.retirar(400); // Muestra un error
miCuenta.consultarSaldo();