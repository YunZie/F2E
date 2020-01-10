import { Injectable } from '@angular/core';
// if call the Ajax use it
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
	

  constructor() { }

  getData(in_code : [number, number]) {
  	const MOCK_DATA = {
  			orders: [
		        {
		            name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
		            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
		            status: {
		              code: 3,
		              type: '已取消'
		            },
		            date: '107/6/12'
		        },
		        {
		            name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
		            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
		            status: {
		              code: 2,
		              type: '已成立'
		            },
		            date: '108/7/21'
		        },
		        {
		            name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
		            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
		            status: {
		              code: 1,
		              type: '處理中'
		            },
		            date: '108/6/2'
		         },
		         {
		            name: 'Apple AirPds 2',
		            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
		            status: {
		              code: 4,
		              type: '已送達'
		            },
		            date: '108/3/02'
		        }
		    ]};


		let result = {orders:[]};
		// insert to array
		MOCK_DATA.orders.forEach( (value , index) => {
			let date_parts = value.date.split('/');
			let _date1 = new Date(parseInt(date_parts[0]), parseInt(date_parts[1]), parseInt(date_parts[2]));

			// if parameter include the code
			if (in_code.includes(value.status.code)){

				// compare the date
				for(let i=0; i < result.orders.length ; i++){
					date_parts = result.orders[i].date.split('/');
					let _date2 = new Date(parseInt(date_parts[0]), parseInt(date_parts[1]), parseInt(date_parts[2]));
					if (_date1 > _date2){
						result.orders.splice(i,0,value);
						break;
					}else if (result.orders.length-1 == i){
						result.orders.push(value);
						break;
					}
				}

				if (result.orders.length == 0){
					result.orders.push(value);
				}

			}
		});
		return result;
	}
}
