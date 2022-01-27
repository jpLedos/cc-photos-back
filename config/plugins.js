module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: "hub5uxrgd",
          api_key: "894786614686139",
          api_secret:"JLt4BXPh5R7PwmxFyUbSI5Y-aAw",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });
