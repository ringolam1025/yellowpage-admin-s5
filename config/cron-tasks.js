module.exports = {
  myJob: {
    task: ({ strapi }) => {
      console.log("🔥 CRON IS RUNNING every 5 seconds");
    },
    options: {
      rule: "*/2 * * * * *",
    },
  },
};
