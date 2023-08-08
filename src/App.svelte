<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./components/shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";

	// tabs
	let tabLabels = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	const handleAdd = () => {
		activeTab = 'Current Polls';
	};

	const tabChange = (e) => {
		activeTab = e.detail;
	};

</script>

<main>
	<Header />
	<main>
		<Tabs {tabLabels} {activeTab} on:tabChange={tabChange}/>
		{#if activeTab === 'Current Polls'}
			<PollList />
		{:else if activeTab === 'Add New Poll'}
			<CreatePollForm on:add={handleAdd}/>
		{/if}
	</main>
	<Footer />
</main>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
