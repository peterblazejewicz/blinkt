export interface IBlinkt {
    clear(): void;
    show(): void;
    setBrightness(brightness: number);
    setPixel(x: any, r: number, g: number, b: number): void;
    writeByte(byte: any): void;
    clearOnExit(value: boolean): void;
}

export default class Blinkt implements IBlinkt {
    public clear(): void {}
    public setBrightness(brightness: number) {
    }
    public show(): void {}
    public setPixel(x: any, r: number, g:number, b: number): void {}
    public writeByte(byte: any): void {}
    public clearOnExit(value: boolean): void {
    }
}