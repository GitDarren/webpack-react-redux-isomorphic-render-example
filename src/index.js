import { render } from 'react-website'

import settings from './react-website'

async function run()
{
	// Renders the webpage on the client side
	const { store, rerender } = await render(settings)

	// Webpack "Hot Module Replacement"
	if (module.hot)
	{
		module.hot.accept('./react-website', () =>
		{
			store.hotReload(settings.reducer)
			rerender()
		})
	}
}

// Run the application
run().catch((error) => console.error(error))