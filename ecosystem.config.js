module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "uvdeveloper",
      host: "34.131.237.17",
      ref: "origin/main",
      repo: "https://gitlab.com/expertcodelab/urbanvyapari.git",
      path: "/home/uvdeveloper/uvwebapp_prod/urbanvyapari/",
      "pre-deploy-local": "",
      "post-deploy":
        "soursce ~/.nvm/.nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },

  },
};
