module.exports = {
  fields: {
    add: {
      siteTitle: {
        label: "Site Title",
        type: "string",
        required: true,
        def: "Matthew Brunetti",
      },
      themeColorPrimary: {
        label: "Primary Color",
        type: "color",
        required: true,
        def: "#196BD5FF",
      },
      myName: {
        label: "My Name",
        type: "string",
        required: true,
        def: "Matthew Brunetti",
      },
      myTitle: {
        label: "My Title",
        type: "string",
        required: true,
        def: "Full-Stack Software Engineer",
      },
      myPhoneNumber: {
        label: "My Phone Number",
        type: "string",
        required: true,
        def: "+1-705-210-9826",
      },
      myEmailAddress: {
        label: "My Email Address",
        type: "string",
        required: true,
        def: "zenflow87@gmail.com",
      },
      mySocialMedia: {
        label: "My Social Media",
        type: "array",
        def: Object.entries({
          GitHub: "https://github.com/zenflow",
          LinkedIn: "https://www.linkedin.com/in/matthewfbrunetti/",
          Twitter: "https://twitter.com/zenflow87",
          Facebook: "https://www.facebook.com/matthew.brunetti/",
        }).map(([platform, url]) => ({ platform, url })),
        titleField: "platform",
        fields: {
          add: {
            platform: {
              label: "Platform",
              type: "select",
              required: true,
              choices: ["GitHub", "LinkedIn", "Twitter", "Facebook", "Instagram", "YouTube"].map(
                (label) => ({ label, value: label }),
              ),
            },
            url: {
              label: "URL",
              type: "url",
              required: true,
            },
          },
        },
      },
    },
    group: {
      general: {
        label: "General",
        fields: ["siteTitle"],
      },
      theme: {
        label: "Theme",
        fields: ["themeColorPrimary"],
      },
      myDetails: {
        label: "My Details",
        fields: ["myName", "myTitle", "myPhoneNumber", "myEmailAddress", "mySocialMedia"],
      },
    },
  },
};
