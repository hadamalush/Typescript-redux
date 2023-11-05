import { Provider as GlobalProvider } from "react-redux";

import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import { store } from "./global/store.ts";

function App() {
	return (
		<GlobalProvider store={store}>
			<Header />
			<Shop>
				{DUMMY_PRODUCTS.map(product => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</GlobalProvider>
	);
}

export default App;
