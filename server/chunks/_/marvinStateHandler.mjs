const jobs = [{
  id: 1,
  type: "goto",
  data: {
    destination: "gang1"
  },
  state: "rejected"
}, {
  id: 2,
  type: "playsound",
  data: {
    sound: "alarm"
  },
  state: "pending"
}];
const getJobs = () => jobs;
const addJob = (job) => {
  const id = jobs.length ? jobs[jobs.length - 1].id + 1 : 1;
  const newJob = { ...job, id, state: "scheduled" };
  jobs.push(newJob);
  return newJob;
};
const jobUpdate = (id, state) => {
  const index = jobs.findIndex((job) => job.id === id);
  jobs[index].state = state;
};

export { addJob as a, getJobs as g, jobUpdate as j };
//# sourceMappingURL=marvinStateHandler.mjs.map
