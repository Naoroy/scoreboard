module.exports = {
  apps : [{
    name: 'scoreboard-api',
    script: 'npm run dev',
    cwd: 'api',
    watch: 'api'
  }, {
    name: 'scoreboard-client',
    script: 'npm run dev',
    cwd: 'web',
    watch: 'web'
  }]
};
