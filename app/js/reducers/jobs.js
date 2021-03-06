const initialState = {
    activeJobs: [],
    completedJobs: [],
    failedJobs: []
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'NEW_ACTIVE_JOB': {
        const newState = {
            ...state,
            activeJobs: [
                ...state.activeJobs,
                action.job
            ]
        };
        return newState;
    }
    case 'JOB_COMPLETED': {
        const newState = {
            ...state,
            activeJobs: [
                ...state.activeJobs.filter(a => a.uuid !== action.job.uuid)
            ]
        };

        if (action.job.error) {
            newState.failedJobs = [
                ...state.failedJobs,
                action.job
            ];
        } else {
            newState.completedJobs = [
                ...state.completedJobs,
                action.job
            ];
        }

        return newState;
    }
    default:
        return state;
    }
};

export default jobReducer;
