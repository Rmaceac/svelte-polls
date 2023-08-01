<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./components/shared/Tabs.svelte";

	// tabs
	let tabLabels = ['Current Polls', 'Add New Poll'];
	let activeTab = ['Current Polls'];
</script>

<main>
	<Header />
	<main>
		<Tabs {tabLabels} {activeTab}/>
	</main>
	<Footer />
</main>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
