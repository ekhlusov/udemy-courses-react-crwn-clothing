import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
	convertCollectionSnapshotToMap,
	firestore
} from "../../firebase/firebase.utils";
import {
	fetchCollectionsFailure,
	fetchCollectionsSuccess
} from "./shop.actions";

// * - generator functions - yeild - обязательно!
// Позволяет поочереди выполнять действия
// .next() - следующее действие

export function* fetchCollectionsAsync() {
	yield console.log("fired");
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot); // call - эффект, который запускает метод, по сути convertCollectionSnapshotToMap(snapshot)

		yield put(fetchCollectionsSuccess(collectionsMap)); // put - эффект, чтобы создавать actions
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
