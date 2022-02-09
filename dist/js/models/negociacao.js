export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return this._data;
    }
    get volume() {
        const data = new Date(this._data.getTime());
        return this.quantidade * this.valor;
    }
}
