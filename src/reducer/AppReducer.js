import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
	name: "app",
	initialState: {
		name : "Gavs-GS"
	},
	reducers: {
    UPDATE_NAME(state, action) {
        state.name = action.payload.name;
        document.title = action.payload.name;
    }
	},
});

export const { UPDATE_NAME} = AppSlice.actions;

export default AppSlice.reducer;