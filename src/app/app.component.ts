import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classdictionary={'Alamri, Hassan Abdullah S' : 'Avumimus@aol.com',
	'Olivia Ayala': 'oliviaayalay@gmail.com',
	'Adrian Baran': 'adrian.baran.30@gmail.com',
	'Gabriel Bouzard': 'gabrielbouzard14@gmail.com', 
	'Nathaniel Brengle': 'nathaniel.brengle@gmail.com ',
	'Benjamin Conrad': 'bconrad18@gmail.com',
	'Nupur Ketan Desai': 'nupurdesai1990@gmail.com',
	'Sara El Koutbia': 'SELKOUTB@depaul.edu ',
	'Ru Fang': 'RFANG2@mail.depaul.edu',
	'Corina Mercedes Ferrer Marcano': 'corinaferrer93@gmail.com',
	'Chandler Gegg': 'chandlergegg@gmail.com',
	'Gaurav Gupta': 'gauravkrishn30@gmail.com',
	'Andrew Johnson': 'avumimus@aol.com',
	'Jing Li': 'jane.jingli.0810@gmail.com ',
	'Wenchuang Liu': 'trevortyy@gmail.com ',
	'Li-Wey Lu': 'LIWEYLU@GMAIL.COM',
	'Sviatlana Matchenia': 'vibirau@gmail.com',
	'Karrin Melton': 'karrinjmelton@gmail.com',
	'Jay Pan': 'jay.pan67@gmail.com',
	'Hieu Dang Dac Pham': 'dachieu1701@gmail.com',
	'Dmitry Shatalov': 'WIZARD511@HOTMAIL.COM',
	'Junhua Shi': 'shijh302@gmail.com',
	'Manish Singh': 'manish_singh91@live.com', 
	'Carl Smith': 'CARLEUGENE@AOL.COM',
	'Yunyun Tao': 'innoshatalov@gmail.com',
	'Travis Vaughn': 'travis.christopher.vaughn@gmail.com ',
	'Michael Vieth': 'michaelsoccer35@gmail.com ',
	'Jonathan Wilkison': 'jwilkis2@gmail.com',
	'Qianru Wu': 'qianru.wu@outlook.com',
	'Aolin Yang': 'yangal321@gmail.com ',
	'lawen liu': 'lwc541117@hotmail.com'
	}

	searchByName(name:HTMLInputElement){
		if (name.value in this.classdictionary){
			//console.log(this.classdictionary[name.value]);
			document.getElementsByClassName("display")[0].innerHTML=this.classdictionary[name.value];
		}else{
			document.getElementsByClassName("display")[0].innerHTML='NO MATCH NAME, PLEASE TRY AGAIN!';
		}
	}
}
