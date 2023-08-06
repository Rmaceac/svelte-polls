<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./components/shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";

	// tabs
	let tabLabels = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	let polls = [
		{
			id: 1,
			question: 'Chocolate or Vanilla?',
			answerA: 'Chocolate',
			answerB: 'Vanilla',
			votesA: 9,
			votesB: 12
		}
	];

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeTab = 'Current Polls';
	}

	const tabChange = (e) => {
		activeTab = e.detail;
	}

	const handleVote = (e) => {
		const { option, id } = e.detail;
		let pollsCopy = [...polls]
	}
</script>

<main>
	<Header />
	<main>
		<Tabs {tabLabels} {activeTab} on:tabChange={tabChange}/>
		{#if activeTab === 'Current Polls'}
			<PollList {polls} on:vote{handleVote}/>
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
