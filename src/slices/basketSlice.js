import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			state.items = addItemToBasket(state.items, action.payload);
		},
		removeFromBasket: (state, action) => {
			state.items = removeItemFromBasket(state.items, action.payload);
		},
		clearFromBasket: (state, action) => {
			state.items = clearItemFromBasket(state.items, action.payload);
		},
	},
});

export const {
	addToBasket,
	removeFromBasket,
	clearFromBasket,
} = basketSlice.actions;

// Method
const addItemToBasket = (items, itemToAdd) => {
	const existingItem = items.find((item) => {
		return item.id === itemToAdd.id;
	});

	if (existingItem) {
		return items.map((item) => {
			return item.id === itemToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item;
		});
	}

	return [...items, { ...itemToAdd, quantity: 1 }];
};

const removeItemFromBasket = (items, itemToRemove) => {
	const existingItem = items.find((item) => {
		return item.id === itemToRemove.id;
	});

	if (existingItem.quantity === 1) {
		return items.filter((item) => {
			return item.id !== itemToRemove.id;
		});
	}

	return items.map((item) => {
		return item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item;
	});
};

const clearItemFromBasket = (items, itemToClear) => {
	return items.filter((item) => {
		return item.id !== itemToClear.id;
	});
};

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotalPrice = (state) =>
	state.basket.items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);
export const seletTotalItemsCount = (state) => {
	return state.basket.items.reduce((count, item) => {
		return count + item.quantity;
	}, 0);
};

export default basketSlice.reducer;
