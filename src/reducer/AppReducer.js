import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
	name: "app",
	initialState: {
		name : "Gavs-GS",
		typicode : [],
		comments : []
	},
	reducers: {
    UPDATE_NAME(state, action) {
        state.name = action.payload.name;
        document.title = action.payload.name;
	},
	UPDATE_TYPICODE(state, action) {
        state.typicode = action.payload.typicode;
	},
	DELETE_TYPICODE(state, action) {
		let oldtypicode = Object.assign({},state.typicode);
		oldtypicode = oldtypicode.slice(oldtypicode.indexOf(action.payload.typicode),1);
        state.typicode = oldtypicode;
	},
	UPDATE_COMMENTS(state, action) {
        state.comments = action.payload.comments;
    }
	},
});

export const { UPDATE_NAME,UPDATE_TYPICODE,UPDATE_COMMENTS} = AppSlice.actions;

export default AppSlice.reducer;