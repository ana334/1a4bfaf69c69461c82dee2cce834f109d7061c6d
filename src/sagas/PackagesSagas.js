import { put , takeLatest } from "redux-saga/effects";
import { delay } from 'redux-saga/effects'
import * as actionTypes from "../const/ActionTypes";

// Worker sagas//
function* getPackages(action) {

	try {
		console.log("Attempting to get List Jobs with axios..");
		// usually it is an api call
		const response = [{
				id: 1,
				name: 'Tokyo ' + action.package_type,
				photo: './room.jpg',
				price: 'Rp. 25.000,-',
				original_price: 'Rp. 45.000,-',
				free_delivery: true,
				detail: 'Lunch * Budget * Kitchen'
			},{
				id: 2,
				name: 'Sechuan ' + action.package_type,
				photo: './room.jpg',
				price: 'Rp. 30.000,-',
				original_price: 'Rp. 60.000,-',
				free_delivery: false,
				detail: 'Lunch * Budget * Kitchen'
			},{
				id: 3,
				name: 'Healthy ' + action.package_type,
				photo: './room.jpg',
				price: 'Rp. 20.000,-',
				original_price: 'Rp. 40.000,-',
				free_delivery: true,
				detail: 'Lunch * Budget * Kitchen'
			},{
				id: 4,
				name: 'Pricy ' + action.package_type,
				photo: './room.jpg',
				price: 'Rp. 15.000,-',
				original_price: 'Rp. 25.000,-',
				free_delivery: false,
				detail: 'Lunch * Budget * Kitchen'
			},{
				id: 5,
				name: 'Sweet ' + action.package_type,
				photo: './room.jpg',
				price: 'Rp. 15.000,-',
				original_price: 'Rp. 25.000,-',
				free_delivery: false,
				detail: 'Lunch * Budget * Kitchen'
			},
		];
		yield delay(500);
		yield put({type:actionTypes.get('PACKAGES', 'SUCCESS'), response: response, infinite: false});

	} catch(e) {
		console.log("Request failed! could not get list jobs");
		console.log(e);
		yield delay(500);
		yield put({type:actionTypes.get('PACKAGES', 'FAIL')});
	}
}

// Watcher sagas//
export function* wacthGetPackages() {
	console.log("Redux saga is watching LOAD_PACKAGES action listener...");
	yield takeLatest(actionTypes.get('PACKAGES'), getPackages);
}
