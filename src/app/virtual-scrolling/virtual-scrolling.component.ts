import {Component, OnInit} from '@angular/core';


@Component({
  selector: "virtual-scrolling",
  templateUrl: 'virtual-scrolling.component.html',
  styleUrls: ["virtual-scrolling.component.scss"]
})
export class VirtualScrollingComponent implements OnInit {

  items = Array.from({length: 100}).map((value, i) => `Item #${i}`);

  ngOnInit() {

  }


}
