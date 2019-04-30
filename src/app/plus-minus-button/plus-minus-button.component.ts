import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-plus-minus-button',
  templateUrl: './plus-minus-button.component.html',
  styleUrls: ['./plus-minus-button.component.css']
})
export class PlusMinusButtonComponent implements OnInit {
  @Input()
  desc: string = 'Default desc...';

  @Input()
  min: number = 0;

  @Input()
  max: number = 10;

  @Input()
  border: number;

  @Output()
  onChanged: EventEmitter<any> = new EventEmitter();

  static EVENT_TYPES: any = {
    MINUS: 'DECREASE',
    PLUS: 'INCREASE'
  };

  private _count: number = 0;

  constructor() {}

  ngOnInit() {}

  plusClickHandler(): void {
    if (!this._isMaxReached() || this.max === undefined) {
      this._count++;
    }

    this.onChanged.emit({
      value: this._count,
      type: PlusMinusButtonComponent.EVENT_TYPES.PLUS
    });
  }

  minusClickHandler(): void {
    if (!this._isMinReached() || this.min === undefined) {
      this._count--;
    }

    this.onChanged.emit({
      value: this._count,
      type: PlusMinusButtonComponent.EVENT_TYPES.MINUS
    });
  }

  private _isMinReached(): boolean {
    if (this.min !== undefined) {
      return this._count <= this.min;
    }

    return true;
  }

  private _isMaxReached(): boolean {
    if (this.max !== undefined) {
      return this._count >= this.max;
    }

    return true;
  }
}
