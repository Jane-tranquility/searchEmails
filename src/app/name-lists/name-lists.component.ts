import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-lists',
  templateUrl: './name-lists.component.html',
  styleUrls: ['./name-lists.component.css']
})
export class NameListsComponent implements OnInit {
	names:string[];
  	constructor() {
  		this.names=['Alamri, Hassan Abdullah S','Olivia Ayala','Adrian Baran','Gabriel Bouzard','Nathaniel Brengle',
  	            'Benjamin Conrad','Nupur Ketan Desai','Sara El Koutbia','Ru Fang','Corina Mercedes Ferrer Marcano',
  	            'Chandler Gegg','Gaurav Gupta','Andrew Johnson','Jing Li','Wenchuang Liu','Li-Wey Lu','Sviatlana Matchenia',
  	            'Karrin Melton','Jay Pan','Hieu Dang Dac Pham','Dmitry Shatalov','Junhua Shi','Manish Singh','Carl Smith',
  	            'Yunyun Tao','Travis Vaughn','Michael Vieth','Jonathan Wilkison','Qianru Wu','Aolin Yang','lawen liu'];

  	}

  ngOnInit() {
  }

}
