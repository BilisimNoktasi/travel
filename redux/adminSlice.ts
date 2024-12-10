import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { Admin } from "@/types/admin";
import { postRequest } from "@/service/requestService";
import { Tour } from "@/types";

const initialState: Admin = {
    tours: [],
    tour: null
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        getTours: (state,action) => {
            state.tours = action.payload
        },
        getTour: (state,action) => {
            state.tour = action.payload
        }
    }
})

export const createTourDispatch = (tourData: Tour) => async(dispatch:Dispatch) => {
    postRequest({controller:'admin',action:'create-post'},tourData).then(res=> {
        alert(res.data.message)
    })
}


export const { getTours, getTour } = adminSlice.actions

export default adminSlice.reducer;