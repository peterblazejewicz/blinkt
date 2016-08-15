interface BlinktInterface {
    brightness: number;
    clearOnExit: boolean;
    clear(): void;
    show(): void;
    setPixel(x: any, r: number, g: number, b: number): void;
    writeByte(byte: any): void;
}

export default class Blinkt implements BlinktInterface {
    _brightness: number;
    _clearOnExit: boolean;
    public clear(): void {}
    public show(): void {}
    public setPixel(x: any, r: number, g:number, b: number): void {}
    public writeByte(byte: any): void {};
    set brightness(value: number) {
        this._brightness = value;
    }
    set clearOnExit(value: boolean) {
        this._clearOnExit = value;
    }
}