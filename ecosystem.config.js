module.exports = {
    apps: [
    //   {
    //     name: "click4_backend",
    //     script: "npm",
    //     args: "start",
    //     watch: false,
    //     instance: 1,
    //     exec_mode: "cluster",
    //     env: {
    //       NODE_OPTIONS: "--max_old_space_size=8192",
    //     },
    //   },
    //   {
    //     name: 'click4_canvas',
    //     script: 'npx',
    //     watch: false,
    //     args: "serve -s ./packages/client/build -p 4042",
    //     watch: false,
    //     instance: 1,
    //     exec_mode: 'cluster',
    //     env: {
    //       NODE_OPTIONS: '--max_old_space_size=8192',
    //     },
    //   },
    //   {
    //     name: "click4_preview",
    //     script: 'npx',
    //     watch: false,
    //     args: "serve -s ./packages/preview/build -p 4043",
    //     watch: false,
    //     instance: 1,
    //     exec_mode: "cluster",
    //     env: {
    //       NODE_OPTIONS: '--max_old_space_size=8192',
    //     },
    //   },
  
      // {
      //   name: "click4_canvas",
      //   script: "npm",
      //   args: "run run-client",
      //   watch: false,
      //   instance: 1,
      //   exec_mode: "cluster",
      //   env: {
      //     NODE_OPTIONS: "--max_old_space_size=8192",
      //     PORT: 4042,
      //   },
      // },
      // {
      //   name: "click4_preview",
      //   script: "npm",
      //   args: "run run-preview",
      //   watch: false,
      //   instance: 1,
      //   exec_mode: "cluster",
      //   env: {
      //     PORT: 4043,
      //   },
      // },
      {
        name: "click4_docs",
        script: "npm",
        args: "run serve -- -p 3006",
        watch: false,
        instance: 1,
        exec_mode: "cluster",
      },
    ],
  };