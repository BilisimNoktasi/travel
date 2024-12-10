import { createSlice, Dispatch } from "@reduxjs/toolkit";
import {TourState} from "@/types";
import { getRequest } from "@/service/requestService";

const initialState: TourState = {
    tour: null,
    tours: []
}

const tourSlice = createSlice({
    name: 'tour',
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

export const getToursDispatch = (page:number,size:number) => async (dispatch:Dispatch) => {
    getRequest({controller:'tour',action:'get-all-tour',params:{page,size}}).then(res=> {
        dispatch(getTours(res?.data))
        console.log(res?.data)
    })
}

export const getTourDispatch = (slug: string,setLoading: (value: boolean) => void) => async (dispatch: Dispatch) => {
    getRequest({controller:'tour',action:'get-tour',params:{slug:slug}}).then(
        res => {
            dispatch(getTour(res?.data))
            console.log(res?.data)
        }  
    ).finally(()=> {
        setLoading(false)
    })
} 

export const { getTours, getTour } = tourSlice.actions;
export default tourSlice.reducer;