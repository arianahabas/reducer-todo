export const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					task: action.payload,
					completed: false,
					id: Date(),
				},
			];
		case "TOGGLE_COMPLETED":
			return state.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						completed: !item.completed,
					};
				} else {
					return item;
				}
			});
		case "CLEAR_COMPLETED":
			return state.filter((item) => !item.completed);
		default:
			return state;
	}
};

