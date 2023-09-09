import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icone-svg',
  templateUrl: './icone-svg.component.html',
  styleUrls: ['./icone-svg.component.scss']
})
export class IconeSvgComponent implements OnInit{
  @Input() name = 'emoji-smile';
  @Input() width = 25;
  @Input() height = 25;
  @Input() className = '';
  path = '';
  ngOnInit() {
    this.path = `assets/img/icons/svgs/${this.name}.svg`;
  }

}
