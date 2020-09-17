import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: ``,
  styles: [],
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  constructor() {}

  ngOnInit(): void {}
}
