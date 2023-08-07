import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: 'Chocolate or Vanilla?',
    answerA: 'Chocolate',
    answerB: 'Vanilla',
    votesA: 9,
    votesB: 12
  }
]);

export default PollStore;
