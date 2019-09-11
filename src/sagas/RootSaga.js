import { fork, all } from "redux-saga/effects";
import * as PackagesSagas from "./PackagesSagas";

export default function* rootSaga() {
	yield all([
		...Object.values(PackagesSagas),
	].map(fork));
}
