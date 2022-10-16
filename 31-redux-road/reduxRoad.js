const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case "travel": {
      return {
        supplies: state.supplies - 20 * action.payload,
        distance: state.distance + 10 * action.payload,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    default: {
      return state;
    }
  }
};

let wagon = reducer((state = undefined), (action = {}));
wagon = reducer(wagon, { type: "travel", payload: 1 });
wagon = reducer(wagon, { type: "gather" });
wagon = reducer(wagon, { type: "tippedWagon" });
wagon = reducer(wagon, { type: "travel", payload: 3 });

console.log(wagon);
