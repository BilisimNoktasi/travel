import { getRequest } from "@/service/requestService";
import { VillaState, Villa } from "@/types";
import { createSlice, Dispatch } from "@reduxjs/toolkit";

const initialState: VillaState = {
    villas: [],
    villa: undefined
}

const villaSlice = createSlice({
    name: 'villa',
    initialState,
    reducers: {
        getVillas: (state,action) => {
            state.villas = action.payload
        },
        getVilla: (state,action) => {
            state.villa = action.payload;
        }
    }
})

export const getVillasDispatch = () => async (dispatch: Dispatch) => {
    getRequest({controller:'villa',action:'get-all-villa'}).then(res=> {
        dispatch(getVillas(res?.data.items))
    })
}

export const getVillaDispatch = (url: string,setLoading:(value: boolean)=> void) => async (dispatch: Dispatch) => {
    getRequest({controller: 'villa', action:'get-villa-detail', params:{tag:url}}).then(res=> {
        dispatch(getVilla(res?.data))
    }).finally(()=> {
        setLoading(false)
    })
}

export const { getVilla, getVillas } = villaSlice.actions

export default villaSlice.reducer;