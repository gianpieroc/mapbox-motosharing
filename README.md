# App Technical Test

## Specifications

- No test cases added because I was noticed that jest is not present in the package.json as well as its not considered for the test
- Created a context to manage state between different components
- Focused on ios since Android connection to websockets was failing
- Created a connected-components folder to define components linked to business logic, whicle components folder is including only decoupled and reusable components
- All available vehicles are in yellow while grey vehicles are in grey
- There is room for improvement for the useVehicles context to split it into more different responsabilities like the websockets connection
