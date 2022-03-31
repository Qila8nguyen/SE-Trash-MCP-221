export const PENDING = 'dashboard/pending';
export const LOADING = 'dashboard/loading';
export const SUCCESS = 'dashboard/sucess';

export default function pendingDashboard () {
    return {
        type: PENDING,
        payload: 'bla'
    }
}

export default function loadingDashboard () {
    return {
        type: PENDING,
        payload: 'bla'
    }
}

export default function successDashboard (user) {
    return {
        type: PENDING,
        payload: user
    }
}