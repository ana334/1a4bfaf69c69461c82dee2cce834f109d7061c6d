import * as actionTypes from "../const/ActionTypes";

const packages = {
	datas: [],
	progress: false,
	reload: false,
	no_result: false,
	delay: 500 };

function result(state, action) {
	if (action.infinite === true) {
		return state.datas.concat(action.response);
	}
	return action.response;
}

export default function Packages(state = packages, action) {
	if (action.infinite !== true) {
		state = {...state, ...packages};
	}
	switch (action.type) {
	case actionTypes.get('PACKAGES'):
		return { ...state, progress: true };
	case actionTypes.get('PACKAGES', 'SUCCESS'):
		return { ...state, datas: result(state, action), delay: 1000, progress: false };
	case actionTypes.get('PACKAGES', 'NOT_FOUND'):
		return { ...state, datas: result(state, action), no_result: true};
	case actionTypes.get('PACKAGES', 'FAIL'):
		return {
			...state,
			reload: true,
			error: "Error while fetching repositories"
		};
	default:
		return state;
	}
}

export function listPackages(package_type) {
	return { type: actionTypes.get('PACKAGES'), package_type};
}
