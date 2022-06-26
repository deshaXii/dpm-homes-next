import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  activeCountry: null,
  activeGovernorate: null,
  activeSize: null,
  bedCount: null,
  propertyType: null,
  bathCount: null,
  filteredProperties: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCountry: (state, action) => {
      state.activeCountry = action.payload;
    },
    setActiveGovernorate: (state, action) => {
      state.activeGovernorate = action.payload;
    },
    setActiveSize: (state, action) => {
      state.activeSize = action.payload;
    },
    setBedCount: (state, action) => {
      state.bedCount = action.payload;
    },
    setBathCount: (state, action) => {
      state.bathCount = action.payload;
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    filterByCountry: (state, action) => {
      let allProperties = action.payload.allProperties,
        type = action.payload.type;
      if (type === "reset") {
        state.filteredProperties = allProperties;
        return;
      } else {
        state.filteredProperties = allProperties.filter((property) => {
          return Number(property.countryId) === Number(state.activeCountry);
        });
      }
    },
    filterByGovernorate: (state, action) => {
      let allProperties = action.payload.allProperties,
        type = action.payload.type;
      if (type === "reset") {
        state.filteredProperties = allProperties;
        return;
      } else {
        state.filteredProperties = allProperties.filter((property) => {
          return (
            Number(property.governorateId) === Number(state.activeGovernorate)
          );
        });
      }
    },
    filterByPropertyType: (state, action) => {
      console.log(action.payload);
      let allProperties = action.payload.allProperties,
        type = action.payload.type;
      if (type === "reset") {
        state.filteredProperties = allProperties;
        return;
      } else {
        state.filteredProperties = allProperties.filter((property) => {
          return (
            property.property_type.toLowerCase() ===
            state.propertyType.toLowerCase()
          );
        });
      }
    },
    filterByAreaSize: (state, action) => {
      let allProperties = action.payload.allProperties,
        type = action.payload.type;
      if (type === "reset") {
        state.filteredProperties = allProperties;
      } else {
        state.filteredProperties = allProperties.filter((property) => {
          return Number(state.activeSize) >= Number(property.total_area);
        });
      }
    },
    filterByBedNum: (state, action) => {
      let allProperties = action.payload.allProperties,
        type = action.payload.type;
      if (type === "reset") {
        state.filteredProperties = allProperties;
      } else {
        state.filteredProperties = allProperties.filter((property) => {
          return Number(state.bedCount) >= Number(property.no_bed_room);
        });
      }
    },
    filterByBathNum: (state, action) => {
      let allProperties = action.payload.allProperties,
        type = action.payload.type;
      if (type === "reset") {
        state.filteredProperties = allProperties;
      } else {
        state.filteredProperties = allProperties.filter((property) => {
          return Number(state.bathCount) >= Number(property.no_bath_room);
        });
      }
    },
    setFilteredProperties: (state, action) => {
      state.filteredProperties = action.payload;
    },
    resetFilter: (state) => {
      (state.activeCountry = ""),
        (state.activeGovernorate = ""),
        (state.activeSize = ""),
        (state.bedCount = ""),
        (state.bathCount = "");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const nextState = {
        ...state.filter,
        ...action.payload.filter,
      };
      return nextState;
    });
  },
});

export const {
  setActiveCountry,
  setBedCount,
  setBathCount,
  setActiveGovernorate,
  filterByGovernorate,
  setActiveSize,
  filterByAreaSize,
  filterByCountry,
  setPropertyType,
  filterByPropertyType,
  filterByBedNum,
  filterByBathNum,
  setFilteredProperties,
  resetFilter,
} = filterSlice.actions;

export const selectFilter = (state) => state.filter;

export default filterSlice.reducer;
