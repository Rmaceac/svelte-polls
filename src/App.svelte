<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./components/shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";

	// tabs
	let tabLabels = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	const handleTabChange = () => {
		activeTab = 'Current Polls';
	}

	const tabChange = (e) => {
		activeTab = e.detail;
	}

	const handleVote = (e) => {
		const { option, id } = e.detail;
		let pollsCopy = [...polls];
		let upvotedPolls = pollsCopy.find((poll) => id === poll.id)

		if (option === 'a') {
			upvotedPolls.votesA++;
		}
		if (option === 'b') {
			upvotedPolls.votesB++;
		}

		polls = pollsCopy;
	}
</script>

<main>
	<Header />
	<main>
		<Tabs {tabLabels} {activeTab} on:tabChange={tabChange}/>
		{#if activeTab === 'Current Polls'}
			<PollList on:vote={handleVote}/>
		{:else if activeTab === 'Add New Poll'}
			<CreatePollForm on:add={handleTabChange}/>
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
