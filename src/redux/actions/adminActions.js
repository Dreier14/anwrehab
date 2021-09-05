import AdminApi from '../../api/AdminApi';
import { SET_DASHBOARD_DATA } from '../reducers/adminReducer';
import { addApiCallInProgress, removeApiCallInProgress, setError } from './apiActions';

export function getDashboardData() {
    return async dispatch => {
        dispatch(addApiCallInProgress());
        try {
            const dashboardData = await AdminApi.getDashboardData();
            console.log("DASHBOARD DATA:", dashboardData);
            dispatch({
                type: SET_DASHBOARD_DATA,
                dashboardData
            });
        } catch(error) {
            console.log("Error", error);
            dispatch(setError(error));
        } finally {
            dispatch(removeApiCallInProgress());
        }
    }
}