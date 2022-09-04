export class Cout {
    private _cout_id!: string;
    public get cout_id(): string {
        return this._cout_id;
    }
    public set cout_id(value: string) {
        this._cout_id = value;
    }
    niveau : string;
    tarif : number;
}
