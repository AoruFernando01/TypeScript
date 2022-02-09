export class Negociacao {
    

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ){}

    get data(): Date {
        return this._data;
    }

    get volume(): number {
        const data = new Date(this._data.getTime())
        return this.quantidade * this.valor;
    }
} 